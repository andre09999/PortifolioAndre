import Avatar from '../imgs/fotoPessoal/1770290592131.png';
import '../App.css';

function Sobre({ color }) {
  return (
    <main id="sobre" className="container-geral">
      
      {/* Foto */}
      <section className="sobre-media">
        <img src={Avatar} className="pessoal" alt="Foto do André" />
      </section>

      {/* Texto */}
      <section className="sobre-texto">
        <h1 className={`sobre-titulo ${color}`}>Sobre Mim</h1>

        <h3 className={`sobre-local ${color}`}>
          Goiânia, Goiás
        </h3>

        <p className={`sobre-paragrafo ${color}`}>
          Sou Desenvolvedor Full Stack com foco em sistemas web e soluções orientadas a dados.
          Trabalho com React, Node.js e SQL, construindo aplicações completas, APIs e integrações.
        </p>

        <p className={`sobre-paragrafo ${color}`}>
          Tenho base em Análise de Dados e Business Intelligence, usando dados para gerar insights e apoiar decisões.
          Atualmente estou evoluindo em IA aplicada para análise e automação.
        </p>
      </section>

    </main>
  );
}

export default Sobre;
