import React from 'react';
import './Expertise.css';
import expertise1 from '../../assets/expertise1.png';
import expertise1Webp from '../../assets/expertise1.webp';
import expertise2 from '../../assets/expertise2.png';
import expertise2Webp from '../../assets/expertise2.webp';

function Expertise() {
  return (
    <section className="expertise">
      <div className="container">
        <div className="section__title">
          <h2 className="title">ЭКСПЕРТИЗА</h2>
          <div className="number">04</div>
        </div>

        <div className="expertise__block">
          <div className="item">
            <picture>
              <source srcSet={expertise1Webp} type="image/webp" />
              <img src={expertise1} alt="Фотография Саши Капустина" loading="lazy" />
            </picture>
            <p><span>САША КАПУСТИН</span>: CEO Unirest&nbsp;IT, ex-CPO Avito Fintech, лектор EMBA Сколково (блок стратегия)<br /> и&nbsp;ФРИИ (блок продуктовый подход) <br /> <a href="https://t.me/productanddot" className="red__span">@productanddot</a></p>
          </div>

          <div className="item">
            <picture>
              <source srcSet={expertise2Webp} type="image/webp" />
              <img src={expertise2} alt="Фотография Миши Колоскова" loading="lazy" />
            </picture>
            <p><span>МИША КОЛОСКОВ</span>: Арт-Директор финансовых сервисов Авито, ex-Design Lead B2C/B2B продуктов в&nbsp;компании Яндекс.Деньги <br /> <a href="https://t.me/bankfloorbelow" className="red__span">@bankfloorbelow</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expertise;
