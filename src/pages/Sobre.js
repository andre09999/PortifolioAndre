const specialties = [
  {
    number: "01",
    title: "Engenharia de produto",
    description:
      "Interfaces responsivas, componentização e experiências consistentes do mobile ao desktop.",
  },
  {
    number: "02",
    title: "Back-end e integrações",
    description:
      "APIs REST, autenticação, regras de negócio e persistência de dados com foco em manutenção.",
  },
  {
    number: "03",
    title: "Dados e BI",
    description:
      "KPIs, dashboards e análises que transformam dados operacionais em contexto para decisões.",
  },
];

function Sobre() {
  return (
    <section id="sobre" className="section section-shell" aria-labelledby="sobre-title">
      <div className="section-heading">
        <p className="section-kicker">Sobre mim</p>
        <h2 id="sobre-title">
          Tecnologia com visão de negócio e atenção aos detalhes.
        </h2>
        <p>
          Atuo na interseção entre desenvolvimento web e dados. Meu processo
          parte do problema real, organiza a experiência do usuário e entrega
          uma solução clara, sustentável e preparada para evoluir.
        </p>
      </div>

      <div className="specialty-grid">
        {specialties.map((specialty) => (
          <article className="specialty-card" key={specialty.number}>
            <span>{specialty.number}</span>
            <h3>{specialty.title}</h3>
            <p>{specialty.description}</p>
          </article>
        ))}
      </div>

      <div className="about-note">
        <p>
          Baseado em <strong>Goiânia, Goiás</strong>, aberto a oportunidades
          remotas e projetos em que produto, tecnologia e dados trabalhem juntos.
        </p>
        <a href="#contato">Vamos conversar <span aria-hidden="true">→</span></a>
      </div>
    </section>
  );
}

export default Sobre;
