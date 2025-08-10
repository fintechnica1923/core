import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="Header">
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/docs">Курс</Link>
          </li>
          {/* Add other links here */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
