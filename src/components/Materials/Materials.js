import React from 'react';
import './Materials.css';

function Materials() {
  return (
    <section className="materials">
      <div className="container">
        <div className="section__title">
          <h2 className="title">МАТЕРИАЛЫ</h2>
          <div className="number">05</div>
        </div>

        <div className="materials__block">
          <p>
            <span>ОТРАСЛЕВАЯ АНАЛИТИКА</span>
            : Обзор событий с&nbsp;исследованием потенциала потребительского рынка и&nbsp;поиск продуктовых решений для улучшения качества жизни людей и&nbsp;повышения эффективности бизнеса
            <span className="red__span">скоро</span>
            <br /><br />
            <span>РЕФЕРЕНСНАЯ БАЗА</span>
            : Каталог ключевых сервисов с&nbsp;набором финансовых продуктов сегментированных по&nbsp;категориям. Для системного анализа и&nbsp;отраслевого бенчмаркинга
            <span className="red__span">скоро</span>
            <br /><br />
            <span>СПЕЦИФИКАЦИИ</span>
            : Академическая документация по&nbsp;разработке и&nbsp;развитию цифровых продуктов, в&nbsp;фундамент которой входит набор спецификаций, инструкций и&nbsp;API для реализации масштабируемых сервисов
            <span className="red__span">скоро</span>
            <br />
          </p>
          <p>
            <span>СООБЩЕСТВО</span>
            : Среда для открытого индустриального диалога с&nbsp;группой экспертов, увлеченных тематикой финансовых технологий. Для&nbsp;комфортного обсуждения новых спецификаций Open API, ЦФА, CBDC и&nbsp;способа их&nbsp;применения в&nbsp;цифровых продуктах
            <span className="red__span">скоро</span>
            <br /><br />
            <span>ОТЧЕТ</span>
            : Развернутая презентация, которая фиксирует текущее положение торгово-финансового рынка, отмечает долгосрочные тренды. В&nbsp;отчет также включены примеры сервисов по&nbsp;каждой из&nbsp;проанализированных категории
            <span className="red__span">скоро</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Materials;
