import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import DocPage from './pages/DocPage/DocPage';
import CertsPage from './pages/CertsPage/CertsPage';
import CertificatesPage from './pages/CertificatesPage/CertificatesPage';
import CertificateGeneratorPage from './pages/CertificateGeneratorPage/CertificateGeneratorPage';
import BlogPage from './pages/BlogPage/BlogPage';
import BlogPost from './components/BlogPost/BlogPost';
import VisionPage from './pages/VisionPage/VisionPage';
import InterviewPage from './pages/InterviewPage/InterviewPage';

function App() {
  const location = useLocation();
  const hideFooter = location.pathname === '/course';
  const isHomePage = location.pathname === '/';
  const isBlogPage = location.pathname === '/blog' || location.pathname.startsWith('/blog/');
  const isInterviewPage = location.pathname === '/interview' || location.pathname.startsWith('/interview/');

  return (
    <div className={`App ${isHomePage ? 'HomePage' : ''} ${isBlogPage ? 'BlogPage' : ''} ${isInterviewPage ? 'InterviewPage' : ''}`}>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course" element={<DocPage />} />
          <Route path="/certs" element={<CertsPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/certificate-generator" element={<CertificateGeneratorPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/vision/:slug" element={<BlogPost />} />
          <Route path="/interview" element={<InterviewPage />} />
          <Route path="/interview/:slug" element={<BlogPost />} />
        </Routes>
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}

export default App;
