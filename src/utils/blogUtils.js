// Утилита для работы с блогом
export const getBlogPosts = async () => {
  try {
    // Получаем список всех markdown файлов из публичной папки
    const context = require.context('../blog', false, /\.md$/);
    const postFiles = context.keys().map(key => key.replace('./', '').replace('.md', ''));
    
    console.log('Found blog files:', postFiles);

    const postsData = await Promise.all(
      postFiles.map(async (slug) => {
        try {
          const mdFile = await import(`../blog/${slug}.md`);
          const content = mdFile.default || '';
          
          // Парсим frontmatter
          const frontmatterRegex = /^---\s*\n(.*?)\n---\s*\n(.*)/s;
          const match = content.match(frontmatterRegex);
          
          if (match) {
            const frontmatter = {};
            const frontmatterLines = match[1].split('\n');
            frontmatterLines.forEach(line => {
              const [key, ...values] = line.split(':');
              if (key && values.length) {
                frontmatter[key.trim()] = values.join(':').trim().replace(/^"|"$/g, '');
              }
            });
            
            // Извлекаем теги из контента если их нет в frontmatter
            const tagMatches = match[2].match(/#\w+/g);
            const tagsFromContent = tagMatches ? tagMatches.map(tag => tag.substring(1)) : [];
            const tags = frontmatter.tags ? frontmatter.tags.split(',').map(t => t.trim()) : tagsFromContent;
            
            // Очищаем контент от тегов для excerpt
            const cleanContent = match[2].replace(/#\w+/g, '').trim();
            
            return {
              slug,
              ...frontmatter,
              content: match[2].substring(0, 200) + '...', // Preview
              excerpt: cleanContent.replace(/[#*`\[\]]/g, '').substring(0, 200) + '...', // Clean excerpt
              tags: tags,
              category: tags[0] || frontmatter.category || 'Блог',
              author: frontmatter.author || 'Саша/Миша',
              date: frontmatter.date || new Date().toISOString().split('T')[0]
            };
          } else {
            // Если нет frontmatter, создаем базовую структуру
            const tagMatches = content.match(/#\w+/g);
            const tags = tagMatches ? tagMatches.map(tag => tag.substring(1)) : ['блог'];
            
            // Очищаем контент от тегов для excerpt
            const cleanContent = content.replace(/#\w+/g, '').trim();
            
            return {
              slug,
              title: slug.replace(/-/g, ' '),
              content: content.substring(0, 200) + '...',
              excerpt: cleanContent.replace(/[#*`\[\]]/g, '').substring(0, 200) + '...',
              date: new Date().toISOString().split('T')[0],
              category: tags[0] || 'Блог',
              tags: tags,
              author: 'Саша/Миша'
            };
          }
        } catch (error) {
          console.error(`Error loading post ${slug}:`, error);
          return null;
        }
      })
    );

    // Фильтруем null значения и сортируем по дате
    const validPosts = postsData
      .filter(post => post !== null)
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    console.log('Valid posts loaded:', validPosts.length);
    return validPosts;
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
};