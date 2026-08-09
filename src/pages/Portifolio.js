import projetos from "../dados/dados.json";

function Portifolio() {
  return (
    <section
      id="portfolio"
      className="section section-shell"
      aria-labelledby="portfolio-title"
    >
      <div className="section-heading portfolio-heading">
        <div>
          <p className="section-kicker">Projetos selecionados</p>
          <h2 id="portfolio-title">Soluções autorais, do código ao resultado.</h2>
        </div>
        <p>
          Uma seleção de trabalhos fora do contexto de formação, com foco em
          produto, experiência, arquitetura e impacto.
        </p>
      </div>

      <div className="project-grid">
        {projetos.map((project, index) => (
          <article className="project-card" key={project.id}>
            <div
              className={`project-visual accent-${project.accent}`}
              aria-hidden="true"
            >
              <span className="project-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <strong>{project.monogram}</strong>
              <span className="project-category">{project.type}</span>
            </div>

            <div className="project-content">
              <div className="project-meta">
                <span>{project.type}</span>
                <span>{project.year}</span>
              </div>

              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <ul className="feature-list">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <ul className="tag-list" aria-label="Tecnologias utilizadas">
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>

              <div className="project-links">
                {project.demo && (
                  <a
                    className="text-link"
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Abrir demonstração de ${project.name}`}
                  >
                    Ver projeto <span aria-hidden="true">↗</span>
                  </a>
                )}
                <a
                  className="text-link text-link-muted"
                  href={project.repository}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir código de ${project.name} no GitHub`}
                >
                  Código <span aria-hidden="true">↗</span>
                </a>
                {project.secondaryRepository && (
                  <a
                    className="text-link text-link-muted"
                    href={project.secondaryRepository}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Abrir API de ${project.name} no GitHub`}
                  >
                    API <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="github-callout">
        <div>
          <p className="section-kicker">Mais código</p>
          <h3>Veja outros experimentos e projetos no GitHub.</h3>
        </div>
        <a
          className="button button-secondary"
          href="https://github.com/andre09999?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          Acessar GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}

export default Portifolio;
