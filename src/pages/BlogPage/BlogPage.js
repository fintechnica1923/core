import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BlogPage.css';
import logo from '../../assets/logo.svg';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        
        // Список всех доступных постов из src/blog
        const postFiles = [
          'Австралийский Исламский Банк',
          'Авторы контента — новый средний класс',
          'Алекса Рампелла',
          'Американский банкинг',
          'Антон Мусин про Open Banking',
          'Бакальчук в «Основателеях»',
          'Банк вместо ввода карты',
          'Банк как стартовая точка для регулярных покупок',
          'Банки на территории e-commerce 🇰🇿',
          'Банковская альтернатива',
          'Банковские сервисы через призму правил первых принципов',
          'Банковское приложение как точка учёта и управления физическими активами',
          'Белый Крузак и загородный дом в Петергофе',
          'Блокчейн и Деньги',
          'Больше чем банк  🇰🇿',
          'Будущее денег'
        ];
        
        console.log('Loading posts:', postFiles);

        const postsData = await Promise.all(
          postFiles.map(async (slug) => {
            try {
              const encodedSlug = encodeURIComponent(slug);
              const response = await fetch(`/blog/${encodedSlug}.md`);
              if (!response.ok) {
                console.warn(`Failed to load post: ${slug} (${response.status})`);
                return null;
              }
              
              const content = await response.text();
              
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
                  author: frontmatter.author || 'Саша/Миша'
                };
              } else {
                // Если нет frontmatter, создаем базовую структуру
                // Извлекаем теги из контента (строки начинающиеся с #)
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

        console.log('Valid posts loaded:', validPosts.length, validPosts);
        setPosts(validPosts);
      } catch (error) {
        console.error('Error loading posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return (
    <div className="blog-page">
      <header className="header">
        <Link to="/"><img className="header__logo" src={logo} alt="Логотип" /></Link>
      </header>

      <main className="blog-page__main">
        <div className="blog-page__container">

          {loading ? (
            <div className="blog-page__loading">
              <div className="loading-spinner"></div>
              <p>Загрузка статей...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="blog-page__empty">
              <h2>Пока нет статей</h2>
              <p>Следите за обновлениями!</p>
            </div>
          ) : (
            <div className="blog-page__posts">
              {posts.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-card">
                  <div className="blog-card__content">
                    <div className="blog-card__header">
                      {post.author && (
                        <span className="blog-card__author">
                          {post.author}
                        </span>
                      )}
                      {post.date && (
                        <time className="blog-card__date">
                          {new Date(post.date).toLocaleDateString('ru-RU', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </time>
                      )}
                    </div>
                    
                    <h2 className="blog-card__title">
                      {post.title}
                    </h2>

                    <p className="blog-card__excerpt">
                      {post.excerpt}
                    </p>
                    
                    <div className="blog-card__footer">
                      <div className="blog-card__meta">
                        {post.tags && post.tags.map((tag, index) => (
                          <span key={index} className="blog-card__tag">
                            <span className="blog-card__category">
                              #{tag}
                            </span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default BlogPage;