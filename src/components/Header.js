import React from 'react';
import '../index.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Chaimaa's Portfolio</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#about">À propos</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#skills">Compétences</a></li>
          <li><a href="#formations">Formations</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
