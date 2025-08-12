import React from 'react';
import certificates from '../../certificates.json';
import './CertificateViewer.css';

// Import all certificates
function importAll(r) {
  let images = {};
  r.keys().forEach((item) => { 
    images[item.replace('./', '')] = r(item); 
  });
  return images;
}

const certs = importAll(require.context('../../assets/certs', true, /\.(png|pdf)$/));

const CertificateViewer = () => {
  return (
    <div className="certificate-viewer">
      <div className="container">
        <h1>СЕРТИФИКАТЫ</h1>
        <div className="certificate-list">
        {certificates.map((cert, index) => {
          const ruImageKey = `RU/${cert.ru}.png`;
          const hasRuImage = cert.ru && certs[ruImageKey];
          
          return (
            <div key={index} className="certificate-card">
              {hasRuImage && (
                <img 
                  src={certs[ruImageKey]} 
                  alt={`${cert.name} - Russian Certificate`} 
                  className="certificate-preview"
                  onError={(e) => {
                    console.error('Failed to load image:', ruImageKey);
                    e.target.style.display = 'none';
                  }}
                />
              )}
            
            <div className="certificate-links">
              {cert.ru && certs[`RU/${cert.ru}.png`] && (
                <div className="language-group">
                  <h4>Русский:</h4>
                  <a href={certs[`RU/${cert.ru}.png`]} download>PNG</a>
                  <a href={certs[`RU/${cert.ru}.pdf`]} download>PDF</a>
                </div>
              )}
              {cert.en && certs[`EN/${cert.en}.png`] && (
                <div className="language-group">
                  <h4>Английский:</h4>
                  <a href={certs[`EN/${cert.en}.png`]} download>PNG</a>
                  <a href={certs[`EN/${cert.en}.pdf`]} download>PDF</a>
                </div>
              )}
            </div>
          </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default CertificateViewer;