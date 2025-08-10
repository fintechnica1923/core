import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DocPage.css';
import logo from '../../assets/logo.svg';
import avatar1 from '../../assets/Avatar1.png';
import avatar2 from '../../assets/Avatar2.png';
import avatar3 from '../../assets/Avatar3.png';
import avatar4 from '../../assets/Avatar4.png';
import buy from '../../assets/buy.svg';

const DocPage = () => {
  const [openTopic, setOpenTopic] = useState(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      setOpenTopic(0);
    }
  }, []);

  const handleTopicClick = (index) => {
    setOpenTopic(openTopic === index ? null : index);
  };

  const topics = [
    {
      date: "22 сентября 2025",
      title: "Что такое финтех",
      avatars: [avatar1, avatar2],
      text: "В&nbsp;первой лекции мы&nbsp;начнём с&nbsp;разбора того, что включает в&nbsp;себя понятие &laquo;финансовые технологии&raquo;, и&nbsp;как они меняют современный рынок. Затем обсудим ключевые вызовы, с&nbsp;которыми сталкиваются торгово-финансовые организации, и&nbsp;рассмотрим, через какие ниши классические банки ищут новые точки роста. Отдельное внимание уделим роли встраиваемых финансов в&nbsp;формировании конкурентных преимуществ и&nbsp;завершим обзором экосистем, их&nbsp;продуктового и&nbsp;финтех-потенциала."
    },
    {
      date: "29 сентября 2025",
      title: "Платежи и лояльность",
      avatars: [avatar2],
      text: "Во&nbsp;второй лекции мы&nbsp;сосредоточимся на&nbsp;прикладных аспектах платежей. Разберём, как устроены транзакции и&nbsp;различные способы оплаты, а&nbsp;также при каких условиях компаниям стоит создавать собственные платёжные инструменты. Предметно обсудим карты и&nbsp;модели монетизации, специфику внешних транзакций и&nbsp;процессы, происходящие при оплате, включая причины выхода компаний на&nbsp;внешние рынки. Кроме того, рассмотрим ключевые элементы KYC и&nbsp;идентификации, механизмы эквайринга на&nbsp;примере программ лояльности и&nbsp;завершим обсуждением вопросов контроля денежных средств."
    },
    {
      date: "06 октября 2025",
      title: "Кредиты",
      avatars: [avatar1],
      text: "В&nbsp;третей лекции мы&nbsp;погрузимся в&nbsp;мир кредитных продуктов и&nbsp;разберём ключевые механики их&nbsp;работы. Поговорим о&nbsp;классических кредитах, рассрочках и&nbsp;модели BNPL, а&nbsp;также обсудим, откуда компании привлекают средства для кредитования. Отдельное внимание уделим роли ключевой ставки&nbsp;ЦБ, влиянию на&nbsp;ценообразование и&nbsp;структуру продуктовых предложений. Завершим лекцию разбором систем риск-менеджмента и&nbsp;процессов сопровождения кредитов."
    },
    {
      date: "13 октября 2025",
      title: "Инвестиции",
      avatars: [avatar3],
      text: "В&nbsp;четвертой лекции мы&nbsp;откроем для вас мир инвестиций изнутри. Вы&nbsp;узнаете, как устроен инвестиционный рынок, какие продукты и&nbsp;участники формируют его экосистему, и&nbsp;проследите весь путь выпуска акции&nbsp;&mdash; от&nbsp;мотивации до&nbsp;выхода на&nbsp;биржу. Мы&nbsp;разберём техническую и&nbsp;юридическую составляющие, которые обеспечивают прозрачность и&nbsp;безопасность процессов, и&nbsp;обсудим ключевые тренды, которые уже сегодня меняют инвестиционную индустрию. После лекции вы&nbsp;сможете лучше понимать, как работают инвестиционные механизмы и&nbsp;какие возможности они открывают для бизнеса и&nbsp;частных инвесторов."
    },
    {
      date: "20 октября 2025",
      title: "ЦФА",
      avatars: [avatar4],
      text: "В&nbsp;пятой лекции мы&nbsp;разберём новые спецификации Центрального Банка и&nbsp;их&nbsp;влияние на&nbsp;финансовый рынок.Погрузимся в&nbsp;инфраструктуру CBDC&nbsp;на примере Цифрового Рубля, обсудим специфику &laquo;третьей формы денег&raquo; и&nbsp;узнаем, зачем для её&nbsp;работы нужны смарт-контракты. Отдельное внимание уделим цифровым финансовым активам,их особенностям и&nbsp;регуляторным требованиям. Эта лекция поможет вам понять, как цифровизация трансформирует деньги, инвестиции и&nbsp;финансовые сервисы, открывая новые возможности для бизнеса и&nbsp;пользователей."
    },
    {
      date: "27 октября 2025",
      title: "Лучшие практики",
      avatars: [avatar1, avatar2],
      text: "В&nbsp;шестой лекции мы&nbsp;разберём  на&nbsp;практике, как запускаются финансовые продукты, и&nbsp;покажем весь путь&nbsp;&mdash; от&nbsp;мотивации и&nbsp;подготовки до&nbsp;реального выхода на&nbsp;рынок. Обсудим, как формируется продуктовый портфель и&nbsp;определяется очередность запусков, какая структура команды необходима  и&nbsp;какие процессы обеспечивают успех. Наглядно рассмотрим ключевые стадии и&nbsp;проанализируем клиентский опыт. Также разберём конкретные механики  и&nbsp;комплексные подходы, которые помогают повысить заметность финансовых продуктов на&nbsp;всех этапах воронки."
    }
  ];

  return (
    <div className="page">
      <header className="header">
        <Link to="/"><img className="header__logo" src={logo} alt="Логотип" /></Link>
      </header>

      <main>
        <section className={`topics ${openTopic !== null ? 'topics--has-open' : ''}`}>
          {topics.map((topic, index) => (
            <div key={index} className={`topic-block ${openTopic === index ? 'topic-block--open' : ''}`}>
              <div className="topic-block__full-date">{topic.date}</div>
              <h2 className="topic-block__title" tabIndex="0" role="button" aria-expanded={openTopic === index} onClick={() => handleTopicClick(index)}>
                {topic.title}
                <span className="topic-block__date">{topic.date.slice(0, 5).replace(' ', '.')}</span>
              </h2>
              <div className="topic-block__more">
                <div className="topic-block__avatars">
                  {topic.avatars.map((avatar, i) => (
                    <img key={i} src={avatar} alt={`Avatar${i + 1}`} className="topic-block__avatar" />
                  ))}
                </div>
                <p className="topic-block__text" dangerouslySetInnerHTML={{ __html: topic.text }} />
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer className="footer">
        <div className="footer__section">
          <a href="#">курс по финтеху</a>
          {/*  <a href="#">сертификат</a> */}
        </div>

        <div className="footer__section footer__section--center">
          <a href="https://forms.gle/tb851ywmgMWmV2MLA"><img src={buy} alt="buy" className="footer__buy" /></a>
        </div>

        <div className="footer__section footer__section--right">
          <a href="#">22 сентября — 29 октября</a>
          {/* <a href="#">фак</a> */}
        </div>

        <div className="footer_btn--mob">
          <a href="https://forms.gle/tb851ywmgMWmV2MLA">
            Записаться
          </a>
        </div>
      </footer>
    </div>
  );
};

export default DocPage;