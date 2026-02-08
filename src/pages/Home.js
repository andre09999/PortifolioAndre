import Avatar from '../imgs/avatar/myAvatar.svg';

function Home({ color }) {
  return (
    <main id="home" className="container-gerall">
      {/* Coluna do texto */}
      <section className="texto-sec">
        <h1 id="titulo-home" className={color}>
          Olá, eu sou <br />
          <span className="nome">André Luis</span>
          <br />
          Desenvolvedor Full Stack{" "}
          <span style={{ fontWeight: 300 }}>| Dados, BI e IA aplicada</span>
        </h1>

        <p id="paragrafo" className={color}>
          Construo sistemas web, APIs e dashboards que transformam dados em decisões.
        </p>

        <div className="containerbut">
          <a href="#portifolio" className="but linkedin">
            <h2 className={color}>Ver Projetos</h2>
          </a>

          <a
            href="https://www.linkedin.com/in/devf-andre/"
            target="_blank"
            rel="noreferrer"
            className="but linkedin"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              className="img-but"
              alt="LinkedIn"
            />
            <h2 className={color}>LinkedIn</h2>
          </a>

          <a
            href="https://github.com/andre09999"
            target="_blank"
            rel="noreferrer"
            className="but github"
          >
            <img
              className="img-but"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
            />
            <h2 className={color}>GitHub</h2>
          </a>
        </div>
      </section>

      {/* Coluna da imagem */}
      <section className="home-media">
        <img src={Avatar} className="img-Avatar" alt="Avatar do André" />
      </section>
    </main>
  );
}

export default Home;
