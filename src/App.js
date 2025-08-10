import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import DocPage from './pages/DocPage/DocPage';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/docs" element={<DocPage />} />
          {/* Add other routes here */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
