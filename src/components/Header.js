import React, { useState } from "react";
import menuBar from "../imgs/nav/open-menu.png";
import "./Header.css";

function Header({ themeLetter, toggleClass, themeModeLabel, isDark, onToggle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">

      {/* BRAND */}
      <div className="brand">
        <span className="titulo-header">{"<AL/>"}</span>
        <span className="titulo">Portfólio</span>
      </div>

      {/* NAV */}
      <nav className="nav-header">

        <ul className={isMenuOpen ? "lista1" : "lista"}>
          <li><a href="#home" className="linksA" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#sobre" className="linksA" onClick={() => setIsMenuOpen(false)}>Sobre</a></li>
          <li><a href="#portifolio" className="linksA" onClick={() => setIsMenuOpen(false)}>Portfólio</a></li>
          <li><a href="#contato" className="linksA" onClick={() => setIsMenuOpen(false)}>Contato</a></li>
        </ul>

        {/* BOTÃO MENU MOBILE */}
        <button  className="checkbtn"  onClick={() => setIsMenuOpen(v => !v)}  aria-label="Abrir menu">
        <img src={menuBar} className="fas" alt="menu" />
</button>

      </nav>

      {/* TOGGLE TEMA */}
      <div className={`theme-toggle ${themeLetter}`}>
        <button
          className={`theme-switch ${toggleClass}`}
          onClick={() => onToggle(!isDark)}
          aria-label="Alternar tema"
        >
          <span className="modo">{themeModeLabel}</span>
          <input type="checkbox" className="inputs" checked={isDark} readOnly />
        </button>
      </div>

    </header>
  );
}

export default Header;
