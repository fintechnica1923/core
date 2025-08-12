import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer__title">
          <div className="title">
            <Link to="/course" className="site">КУРС</Link>
          </div>
          <a className="last_site" href="https://финтехника.рф" aria-label="Перейти на главную страницу">финтехника.рФ</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
