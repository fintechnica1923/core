import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CertsPage.css';
import logo from '../../assets/logo.svg';

const CertsPage = () => {
  const certificates = [
    'Andrey Vlasov', 'Anna Gorbacheva', 'Anna Sokolova', 'Artem Dmitriev',
    'Elena Shuvalova', 'Emin Sibirli', 'Ivan Obraztsov', 'Ivan Worchalov',
    'Konstantin Cherkasskiy', 'Konstantin Los', 'Maria Puzakova', 'Mikhail Gavrilov',
    'Natalya Korteleva', 'Nikolay Shcherbatenko', 'Pavel Krepkikh', 'Roman Sentyurev',
    'Sofia Gracheva', 'Torekhan Kuanyshev', 'Vadim Lutskov'
  ];

  const ruOnlyCertificates = ['Gleb Yuchenkov', 'Marina Ovchinnikova', 'Vladislav Golubev', 'Yury Chekashkin'];

  const downloadCertificate = (name, lang, fmt) => {
    const extension = fmt === 'PNG' ? '@2x.png' : '.pdf';
    const originalFileName = `${name}${extension}`;
    const filePath = `/certificate/${lang}/${originalFileName}`;
    
    // Create clean filename with language prefix
    const langPrefix = lang === 'RU' ? 'RU' : 'ENG';
    const cleanName = name.replace(/\s+/g, '_'); // Replace spaces with underscores
    const downloadFileName = fmt === 'PDF' 
      ? `${langPrefix}_${cleanName}.pdf` 
      : `${langPrefix}_${cleanName}.png`;
    
    const link = document.createElement('a');
    link.href = filePath;
    link.download = downloadFileName;
    link.click();
  };

  return (
    <div className="page">
      <header className="header">
        <Link to="/"><img className="header__logo" src={logo} alt="Логотип" /></Link>
      </header>

      <main>
        <section className="certs">
          <div className="certs__container">
            <h1 className="certs__title">Сертификаты</h1>

            <div className="certs__content">
              <div className="certs__list">
                {certificates.map((name) => (
                  <div key={name} className="cert__item">
                    <div className="cert__preview">
                      <img 
                        src={`/certificate/RU/${name}@2x.png`}
                        alt={`Сертификат ${name}`}
                        className="cert__image"
                      />
                    </div>
                    <div className="cert__info">
                      <span className="cert__name">{name}</span>
                      <div className="cert__downloads">
                        <div className="cert__download-row">
                          <span className="cert__lang-label">RU:</span>
                          <button 
                            className="cert__download-btn cert__download-btn--small"
                            onClick={() => downloadCertificate(name, 'RU', 'PNG')}
                          >
                            PNG
                          </button>
                          <button 
                            className="cert__download-btn cert__download-btn--small"
                            onClick={() => downloadCertificate(name, 'RU', 'PDF')}
                          >
                            PDF
                          </button>
                        </div>
                        <div className="cert__download-row">
                          <span className="cert__lang-label">EN:</span>
                          <button 
                            className="cert__download-btn cert__download-btn--small"
                            onClick={() => downloadCertificate(name, 'EN', 'PNG')}
                          >
                            PNG
                          </button>
                          <button 
                            className="cert__download-btn cert__download-btn--small"
                            onClick={() => downloadCertificate(name, 'EN', 'PDF')}
                          >
                            PDF
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {ruOnlyCertificates.map((name) => (
                  <div key={name} className="cert__item">
                    <div className="cert__preview">
                      <img 
                        src={`/certificate/RU/${name}@2x.png`}
                        alt={`Сертификат ${name}`}
                        className="cert__image"
                      />
                    </div>
                    <div className="cert__info">
                      <span className="cert__name">{name}</span>
                      <div className="cert__downloads">
                        <div className="cert__download-row">
                          <span className="cert__lang-label">RU:</span>
                          <button 
                            className="cert__download-btn cert__download-btn--small"
                            onClick={() => downloadCertificate(name, 'RU', 'PNG')}
                          >
                            PNG
                          </button>
                          <button 
                            className="cert__download-btn cert__download-btn--small"
                            onClick={() => downloadCertificate(name, 'RU', 'PDF')}
                          >
                            PDF
                          </button>
                        </div>
                        <div className="cert__download-row cert__download-row--disabled">
                          <span className="cert__lang-label cert__lang-label--disabled">EN:</span>
                          <span className="cert__unavailable">Недоступно</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__section">
        </div>

        <div className="footer__section footer__section--center">
        </div>

        <div className="footer__section footer__section--right">
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

export default CertsPage;