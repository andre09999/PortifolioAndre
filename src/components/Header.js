import { useEffect, useState } from "react";
import "./Header.css";

const navigation = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
];

function Header({ theme, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);
  const nextTheme = theme === "dark" ? "claro" : "escuro";

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#home" aria-label="André Luis — início">
          <span className="brand-mark" aria-hidden="true">AL</span>
          <span className="brand-copy">
            <strong>André Luis</strong>
            <small>Full Stack & Dados</small>
          </span>
        </a>

        <nav
          id="menu-principal"
          className={isMenuOpen ? "main-nav is-open" : "main-nav"}
          aria-label="Navegação principal"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="theme-button"
            type="button"
            onClick={onToggleTheme}
            aria-label={`Ativar tema ${nextTheme}`}
            title={`Ativar tema ${nextTheme}`}
          >
            <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
          </button>

          <button
            className="menu-button"
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="menu-principal"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
