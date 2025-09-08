import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './InterviewPage.css';
import logo from '../../assets/logo.svg';

const InterviewPage = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    // Статические данные о людях для интервью
    const peopleData = [
      {
        id: 1,
        name: 'Михаил Колосков',
        title: 'ART DIRECTOR',
        company: 'Fintech',
        description: 'Михаил Колосков — основатель проекта Core, создающий инновационные решения в области образования и технологий.',
        image: '/images/koloskov.png',
        slug: 'mikhail-koloskov-core'
      },
      {
        id: 2,
        name: 'Александр Ленков',
        title: 'PRODUCT',
        company: '3sigma',
        description: 'UX/UI дизайнер с опытом работы более 5 лет. Специализируется на создании пользовательских интерфейсов для мобильных и веб-приложений.',
        image: '/images/lenkov.jpg',
        slug: 'alexander-lenkov-core'
      }
    ];

    setPeople(peopleData);
  }, []);

  return (
    <div className="interview-page">
      <header className="header">
        <Link to="/"><img className="header__logo" src={logo} alt="Логотип" /></Link>
      </header>

      <main className="interview-page__main">
        <div className="interview-page__container">

          {people.length === 0 ? (
            <div className="interview-page__empty">
              <h2>Пока нет интервью</h2>
              <p>Следите за обновлениями!</p>
            </div>
          ) : (
            <div className="interview-page__grid">
              {people.map((person) => (
                <Link key={person.id} to={`/interview/${person.slug}`} className="person-card">
                  <div className="person-card__image">
                    <img src={person.image} alt={person.name} />
                  </div>
                  
                  <div className="person-card__content">
                    <div className="person-card__meta">
                      <span className="person-card__title">{person.title}</span>
                    </div>
                    
                    <h2 className="person-card__name">
                      {person.name}
                      {person.pronouns && <span className="person-card__pronouns"> {person.pronouns}</span>}
                      <span className="person-card__company"> — {person.company}</span>
                    </h2>

                    <p className="person-card__description">
                      {person.description}
                    </p>
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

export default InterviewPage;