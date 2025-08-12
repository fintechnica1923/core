import React, { useRef, useState } from 'react';
import './CertificateGenerator.css';

const CertificateGenerator = () => {
  const certificateRef = useRef();
  const [selectedName, setSelectedName] = useState("УЧАСТНИК");
  
  const participants = [
    "АННА СОКОЛОВА", "ПУЗАКОВА МАРИЯ", "ВОРЧАЛОВ ИВАН", "ВЛАСОВ АНДРЕЙ",
    "ГРАЧЕВА СОФЬЯ", "ШУВАЛОВА ЕЛЕНА", "ЧЕКАШКИН ЮРИЙ", "ГАВРИЛОВ МИХАИЛ",
    "КРЕПКИХ ПАВЕЛ", "ЧЕРКАССКИЙ КОНСТАНТИН", "ОВЧИННИКОВА МАРИНА", 
    "СЕНТЮРЕВ РОМАН", "ДМИТРИЕВ АРТЕМ", "ЩЕРБАТЕНКО НИКОЛАЙ", "КОРТЕЛЕВА НАТАЛЬЯ",
    "КУАНЫШЕВ ТОРЕХАН", "ЮЧЕНКОВ ГЛЕБ", "ГОРБАЧЕВА АННА", "СИБИРЛИ ЭМИН",
    "ЛУЦКОВ ВАДИМ", "ОБРАЗЦОВ ИВАН", "ЛОСЬ КОНСТАНТИН", "ГОЛУБЕВ ВЛАДИСЛАВ",
    "РОМАН СЕНТЮРЕВ"
  ];

  const copyHtmlForPrint = () => {
    const certificateHtml = certificateRef.current.outerHTML;
    const fullHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { margin: 0; padding: 20px; background: #161415; }
    ${document.querySelector('style') ? document.querySelector('style').innerHTML : ''}
  </style>
</head>
<body>
  ${certificateHtml}
</body>
</html>`;
    
    navigator.clipboard.writeText(fullHtml);
    alert('HTML код скопирован в буфер обмена! Можете вставить в файл .html и распечатать/сохранить как PDF.');
  };

  const generateAllHtmlFiles = () => {
    participants.forEach(name => {
      const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <title>Сертификат - ${name}</title>
  <meta charset="UTF-8">
  <style>
    body { margin: 0; padding: 20px; background: #161415; font-family: Arial, sans-serif; }
    .certificate {
      width: 1200px; height: 800px; background: #2a2a2a; padding: 80px 60px;
      display: flex; flex-direction: column; position: relative; margin: 0 auto;
      justify-content: center; align-items: center; text-align: center;
    }
    .certificate-hexagon {
      width: 100px; height: 100px; background: #FFF; margin-bottom: 60px;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    }
    .certificate-name {
      color: #FFF; font-size: 48px; font-weight: 700; margin-bottom: 50px; letter-spacing: 3px;
    }
    .certificate-description {
      color: #FFF; font-size: 18px; line-height: 1.6; margin-bottom: 20px; max-width: 800px;
    }
    .certificate-course-name { color: rgb(240, 20, 19); font-weight: 600; }
    .certificate-footer {
      width: 100%; display: flex; justify-content: space-between; align-items: flex-end;
      margin-top: auto; padding-top: 60px;
    }
    .certificate-date { color: #AAA; font-size: 14px; }
    .certificate-signature { text-align: center; }
    .signature-line {
      width: 200px; font-family: 'Courier New', monospace; font-size: 24px;
      color: #FFF; margin-bottom: 10px; text-align: center;
    }
    .certificate-director { color: #AAA; font-size: 14px; margin: 0; }
  </style>
</head>
<body>
  <div class="certificate">
    <div class="certificate-hexagon"></div>
    <h1 class="certificate-name">${name}</h1>
    <p class="certificate-description">
      Этот сертификат подтверждает, что участник успешно завершил курс 
      <span class="certificate-course-name">«Финтех: регуляторика, продукт, CX»</span> 
      в объеме 7 лекций
    </p>
    <div class="certificate-footer">
      <div class="certificate-date">
        Дата выдачи: ${new Date().toLocaleDateString('ru-RU')}
      </div>
      <div class="certificate-signature">
        <div class="signature-line">Xakal</div>
        <p class="certificate-director">А.О. Капустин</p>
      </div>
    </div>
  </div>
</body>
</html>`;
      
      const blob = new Blob([htmlContent], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = `certificate-${name.replace(/\s+/g, '-').toLowerCase()}.html`;
      link.href = url;
      link.click();
      URL.revokeObjectURL(url);
    });
  };

  return (
    <div className="certificate-generator">
      <div className="controls">
        <h2>Генератор сертификатов</h2>
        
        <div className="buttons">
          <button onClick={generateAllHtmlFiles} className="btn-generate">
            Скачать все HTML файлы
          </button>
          <button onClick={copyHtmlForPrint} className="btn-generate">
            Копировать HTML текущего
          </button>
        </div>

        <div className="name-selector">
          <label htmlFor="nameSelect">Выберите участника:</label>
          <select 
            id="nameSelect" 
            value={selectedName} 
            onChange={(e) => setSelectedName(e.target.value)}
            className="name-select"
          >
            <option value="УЧАСТНИК">УЧАСТНИК (пример)</option>
            {participants.map((name, index) => (
              <option key={index} value={name}>{name}</option>
            ))}
          </select>
        </div>

        <div className="instructions">
          <h3>Инструкция:</h3>
          <p>1. Выберите участника из списка</p>
          <p>2. Нажмите "Скачать все HTML файлы" для массовой генерации</p>
          <p>3. Откройте HTML файл в браузере и нажмите Ctrl+P для печати в PDF</p>
          <p>4. Или используйте "Копировать HTML" для ручной обработки</p>
        </div>
        
        <div className="participants-list">
          <h3>Участники курса ({participants.length}):</h3>
          <div className="participants-scroll">
            {participants.map((name, index) => (
              <div 
                key={index} 
                className={`participant-item ${selectedName === name ? 'selected' : ''}`}
                onClick={() => setSelectedName(name)}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="certificate-preview">
        <div ref={certificateRef} className="certificate">
          <div className="certificate-hexagon"></div>
          
          <h1 className="certificate-name">{selectedName}</h1>
          
          <p className="certificate-description">
            Этот сертификат подтверждает, что участник успешно завершил курс{' '}
            <span className="certificate-course-name">«Финтех: регуляторика, продукт, CX»</span>{' '}
            в объеме 7 лекций
          </p>
          
          <div className="certificate-footer">
            <div className="certificate-date">
              Дата выдачи: {new Date().toLocaleDateString('ru-RU')}
            </div>
            
            <div className="certificate-signature">
              <div className="signature-line">Xakal</div>
              <p className="certificate-director">А.О. Капустин</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateGenerator;