import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import DocPage from './pages/DocPage/DocPage';
import CertsPage from './pages/CertsPage/CertsPage';
import CertificatesPage from './pages/CertificatesPage/CertificatesPage';
import CertificateGeneratorPage from './pages/CertificateGeneratorPage/CertificateGeneratorPage';

function App() {
  const location = useLocation();
  const hideFooter = location.pathname === '/course';

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course" element={<DocPage />} />
          <Route path="/certs" element={<CertsPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/certificate-generator" element={<CertificateGeneratorPage />} />
        </Routes>
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}

export default App;
