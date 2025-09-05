import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './VisionPage.css';
import logo from '../../assets/logo.svg';

const VisionPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        
        const postFiles = [
          '«Авторы контента — новый средний класс»',
          '2023 → 202*',
          '2025-2030 годы (Банк 4.0)',
          'Банк как стартовая точка для регулярных покупок',
          'Банковские сервисы через призму правил первых принципов',
          'Банковское приложение как точка учёта и управления физическими активами',
          'Бесконтактная экономика',
          'Будущее денег',
          'Будущее потребление',
          'В чем функция посредников? 2',
          'В чем функция посредников?',
          'Внутренние проблемы классических банков',
          'Голос — следующая большая технология в Финтехе',
          'Граф потребления',
          'Единая Платформа для продуктов повседневного Банкинга',
          'Интеграционная роль neo-банков',
          'Карта будущего корпорации',
          'Ключевые задача клиентского финансового сервиса',
          'Контроль оплаты подписок и регулярных платежей',
          'Онлайн-банк как потребительский профиль'
        ];
        
        console.log('Loading posts:', postFiles);

        const postsData = await Promise.all(
          postFiles.map(async (slug) => {
            try {
              const encodedSlug = encodeURIComponent(slug);
              const response = await fetch(`/vision/${encodedSlug}.md`);
              if (!response.ok) {
                console.warn(`Failed to load post: ${slug} (${response.status})`);
                return null;
              }
              
              const content = await response.text();
              
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
                
                return {
                  slug,
                  ...frontmatter,
                  content: match[2]
                };
              } else {
                console.warn(`No frontmatter found in post: ${slug}`);
                return {
                  slug,
                  title: slug.replace(/-/g, ' '),
                  content: content
                }
              }
            } catch (error) {
              console.error(`Error loading post ${slug}:`, error);
              return null;
            }
          })
        );

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
    <div className="vision-page">
      <header className="header">
        <Link to="/"><img className="header__logo" src={logo} alt="Логотип" /></Link>
      </header>

      <main className="vision-page__main">
        <div className="vision-page__container">

          {loading ? (
            <div className="vision-page__loading">
              <div className="loading-spinner"></div>
              <p>Загрузка статей...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="vision-page__empty">
              <h2>Пока нет статей</h2>
              <p>Следите за обновлениями!</p>
            </div>
          ) : (
            <div className="vision-page__content">
              {posts.map((post) => (
                <article key={post.slug} className="vision-post">
                  <h2 className="vision-post__title">{post.title}</h2>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {post.content}
                  </ReactMarkdown>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default VisionPage;
