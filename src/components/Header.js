import React, { useState } from "react";
import menuBar from "../imgs/nav/menu-bar.png";
import "./Header.css";

function Header({ themeLetter, toggleClass, themeModeLabel, isDark, onToggle }) {
  const [nav, setNav] = useState("lista");

  const navBar = (isOpen) => setNav(isOpen ? "lista1" : "lista");

  return (
    <header className="header">
      {/* Logo */}
      <div className="brand">
        <span className="titulo-header">{"<AL/>"}</span>
        <span className="titulo">Portfólio</span>
      </div>

      {/* Menu */}
      <nav className="nav-header" aria-label="Navegação principal">
        <ul className={nav}>
          <li className="linksli"><a href="#home" className="linksA">Home</a></li>
          <li className="linksli"><a href="#sobre" className="linksA">Sobre</a></li>
          <li className="linksli"><a href="#portifolio" className="linksA">Portfólio</a></li>
          <li className="linksli"><a href="#contato" className="linksA">Contato</a></li>
        </ul>

        {/* Botão Mobile */}
        <label className="checkbtn" aria-label="Abrir menu">
          <input type="checkbox" onChange={({ target }) => navBar(target.checked)} />
          <img src={menuBar} className="fas" alt="menu" />
        </label>
      </nav>

      {/* Toggle tema (agora clicável) */}
      <div className={`theme-toggle ${themeLetter}`}>
        <button
          type="button"
          className={`theme-switch ${toggleClass}`}
          onClick={() => onToggle(!isDark)}
          aria-label="Alternar tema"
          aria-pressed={isDark}
        >
          <span className="modo">{themeModeLabel}</span>

          {/* input escondido só para manter semântica (opcional) */}
          <input
            type="checkbox"
            className="inputs"
            checked={isDark}
            readOnly
            tabIndex={-1}
          />
        </button>
      </div>
    </header>
  );
}

export default Header;