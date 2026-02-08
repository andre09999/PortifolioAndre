// Footer.js

import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} André Luis Ribeiro de Souza</p>

        <div className="footer-links">
          <a href="https://github.com/andre09999" target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/devf-andre/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
