import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import DocPage from './pages/DocPage/DocPage';
import CertificatesPage from './pages/CertificatesPage/CertificatesPage';

function App() {
  const location = useLocation();
  const hideFooter = location.pathname === '/course';

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course" element={<DocPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          {/* Add other routes here */}
        </Routes>
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}

export default App;
