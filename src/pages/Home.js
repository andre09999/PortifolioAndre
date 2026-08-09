function Home() {
  return (
    <main id="home" className="hero section-shell">
      <section className="hero-copy" aria-labelledby="hero-title">
        <p className="eyebrow">
          <span className="status-dot" aria-hidden="true" />
          Disponível para novos projetos
        </p>

        <h1 id="hero-title">
          Transformo ideias e dados em
          <span> produtos digitais que geram valor.</span>
        </h1>

        <p className="hero-description">
          Sou André Luis, desenvolvedor Full Stack em Goiânia. Construo
          interfaces acessíveis, APIs confiáveis e dashboards que tornam
          decisões complexas mais simples.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#portfolio">
            Explorar projetos
            <span aria-hidden="true">↗</span>
          </a>
          <a
            className="button button-secondary"
            href="https://www.linkedin.com/in/dev-andre-front-end/"
            target="_blank"
            rel="noreferrer"
          >
            Ver LinkedIn
          </a>
        </div>

        <ul className="technology-list" aria-label="Principais tecnologias">
          <li>React</li>
          <li>TypeScript</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>PostgreSQL</li>
        </ul>
      </section>

      <aside className="hero-panel" aria-label="Resumo profissional">
        <div className="code-window" aria-hidden="true">
          <div className="window-bar">
            <span />
            <span />
            <span />
          </div>
          <pre>
            <code>
              <span className="code-purple">const</span> profissional = {"{"}
              {"\n"}  foco: <span className="code-green">"produto"</span>,
              {"\n"}  base: <span className="code-green">"dados"</span>,
              {"\n"}  padrão: <span className="code-green">"qualidade"</span>
              {"\n"}{"}"};
            </code>
          </pre>
        </div>

        <div className="hero-metrics">
          <div>
            <strong>Full Stack</strong>
            <span>Do conceito ao deploy</span>
          </div>
          <div>
            <strong>UI/UX</strong>
            <span>Clareza em cada interação</span>
          </div>
          <div>
            <strong>Dados</strong>
            <span>Informação que orienta decisões</span>
          </div>
        </div>
      </aside>
    </main>
  );
}

export default Home;
