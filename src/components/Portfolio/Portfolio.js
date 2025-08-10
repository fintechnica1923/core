import React from 'react';
import './Portfolio.css';
import portfelImg1 from '../../assets/portfel_img1.png';
import portfelImg1Webp from '../../assets/portfel_img1.webp';

function Portfolio() {
  return (
    <section className="portfel">
      <div className="container">
        <div className="section__title">
          <h2 className="title">ПОРТФЕЛЬ</h2>
          <div className="number">02</div>
        </div>

        <div className="portfel__block">
          <div className="item">
            <div className="top__img">
              <picture>
                <source srcSet={portfelImg1Webp} type="image/webp" />
                <img src={portfelImg1} alt="Логотип DO-DO PIZZA" loading="lazy" />
              </picture>
            </div>
            <p><span>DO-DO PIZZA:</span> Продукт и клиентский опыт</p>
          </div>

          <div className="item">
            <div className="top__img img2">
              <svg xmlns="http://www.w3.org/2000/svg" width="86" height="121" viewBox="0 0 86 121" fill="none">
                <path d="M78.9744 54.4141V36.4141C78.9744 16.5594 62.8291 0.414062 42.9744 0.414062C23.1198 0.414062 6.97444 16.5594 6.97444 36.4141V54.4141H0.375504V120.414H85.5728V54.4141H78.9744ZM16.5731 36.4141C16.5731 21.8514 28.4116 10.0127 42.9744 10.0127C57.5372 10.0127 69.3758 21.8513 69.3758 36.4141V54.4141H16.5731V36.4141Z" fill="white"/>
              </svg>
            </div>
            <p><span>НОВЫЙ КЕЙС:</span> Стратегия, продукт, дизайн</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
