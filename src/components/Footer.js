import "./Footer.css";

const contacts = [
  {
    label: "E-mail",
    value: "andre09999@live.com",
    href: "mailto:andre09999@live.com",
  },
  {
    label: "LinkedIn",
    value: "/in/dev-andre-front-end",
    href: "https://www.linkedin.com/in/dev-andre-front-end/",
  },
  {
    label: "GitHub",
    value: "@andre09999",
    href: "https://github.com/andre09999",
  },
];

function Footer() {
  return (
    <footer id="contato" className="site-footer">
      <div className="section-shell">
        <section className="contact-panel" aria-labelledby="contact-title">
          <div>
            <p className="section-kicker">Contato</p>
            <h2 id="contact-title">
              Tem um desafio em tecnologia ou dados?
              <span> Vamos construir a solução.</span>
            </h2>
          </div>

          <a className="button button-primary" href="mailto:andre09999@live.com">
            Iniciar conversa <span aria-hidden="true">↗</span>
          </a>
        </section>

        <div className="contact-list">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              <span>{contact.label}</span>
              <strong>{contact.value}</strong>
            </a>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} André Luis. Todos os direitos reservados.</p>
          <a href="#home">Voltar ao topo <span aria-hidden="true">↑</span></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
