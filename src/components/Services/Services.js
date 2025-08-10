import React from 'react';
import './Services.css';

function Services() {
  return (
    <section className="services">
      <div className="container">
        <div className="section__title">
          <h2 className="title">УСЛУГИ</h2>
          <div className="number">03</div>
        </div>

        <div className="services__block">
          <p>
            <span>ЭКСПРЕСС АУДИТ И ЭКСПЕРТНАЯ СЕССИЯ</span>:
            <br />Краткий анализ контекста и&nbsp;ключевых точек роста, первичные рекомендации <span className="red__span">от 5 часов / 1-pager</span><br /> Глубокая коммуникация с&nbsp;командой, <br /> формулировка запроса или экспертная валидация предполагаемых решений <br /><span className="red__span">от 10 часов / 6-pager</span>
          </p>
          <p>
            <span>АНАЛИЗ ПРОДУКТОВ И РАЗРАБОТКА СТРАТЕГИИ</span>:
            Полноценный стратегический документ <br />с&nbsp;дорожной картой внедрения, готовой к&nbsp;оперативной реализации <br /><span className="red__span">от 15 часов / Стратегический документ</span>
          </p>
        </div>

        <div className="svg">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z" fill="#F01413"/>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Services;
