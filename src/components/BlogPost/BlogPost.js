import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link, useParams, useLocation } from 'react-router-dom';
import './BlogPost.css';
import logo from '../../assets/logo.svg';

const BlogPost = () => {
  const { slug } = useParams();
  const location = useLocation();
  const isVisionPost = location.pathname.startsWith('/vision/');
  const isInterviewPost = location.pathname.startsWith('/interview/');
  const basePath = isVisionPost ? '/vision/' : isInterviewPost ? '/interview/' : '/blog/';
  const backLink = isVisionPost ? '/vision' : isInterviewPost ? '/interview' : '/blog';
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${basePath}${slug}.md`);
        if (!response.ok) {
          throw new Error('Пост не найден');
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
          
          setPost({
            ...frontmatter,
            content: match[2]
          });
        } else {
          // Если нет frontmatter, создаем заголовок из slug
          const decodedSlug = decodeURIComponent(slug);
          setPost({
            title: decodedSlug,
            content: content,
            date: new Date().toISOString().split('T')[0],
            author: 'Саша/Миша'
          });
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadPost();
    }
  }, [slug, basePath]);

  if (loading) {
    return (
      <div className="blog-post">
        <header className="header">
          <Link to="/"><img className="header__logo" src={logo} alt="Логотип" /></Link>
        </header>
        <main className="blog-post__main">
          <div className="blog-post__loading">Загрузка...</div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blog-post">
        <header className="header">
          <Link to="/"><img className="header__logo" src={logo} alt="Логотип" /></Link>
        </header>
        <main className="blog-post__main">
          <div className="blog-post__error">
            <h2>Ошибка: {error}</h2>
                      <Link to={backLink} className="blog-post__back-link">← Вернуться к {isVisionPost ? 'Vision' : isInterviewPost ? 'Interview' : 'Блогу'}</Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="blog-post">
      <header className="header">
        <Link to="/"><img className="header__logo" src={logo} alt="Логотип" /></Link>
      </header>
      
      <main className="blog-post__main">
        <div className="blog-post__container">
                    <Link to={backLink} className="blog-post__back-link">← Вернуться к {isVisionPost ? 'Vision' : isInterviewPost ? 'Interview' : 'Блогу'}</Link>
          
          <article className="blog-post__article">
            <header className="blog-post__header">
              <h1 className="blog-post__title">{post.title}</h1>
              <div className="blog-post__meta">
                {post.author && <span className="blog-post__author">{post.author}</span>}
              </div>
            </header>
            
            {post.date && <time className="blog-post__date">{new Date(post.date).toLocaleDateString('ru-RU')}</time>}
            
            <div className="blog-post__content">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  code({node, inline, className, children, ...props}) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <pre className={`language-${match[1]}`}>
                        <code className={className} {...props}>
                          {children}
                        </code>
                      </pre>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  }
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;