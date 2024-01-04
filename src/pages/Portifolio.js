import React from 'react';
import projetos from '../dados/dados.json';

function Portifolio({ color }) {
  const imagens = require.context('../imgs/Projetos/', false, /\.(jpg)$/);
  const fotos = imagens.keys().map(imagens).sort();
  return (
    <main id='portifolio' className='projetos-cont'>
      <h1 id='titulo-Projetos' className={color}>Projetos</h1>
      <section className='projetos'>
        {projetos.map((projeto, index) => (
          <a key={index} target='_blank' href={projeto.link} rel="noreferrer">
            <img src={fotos[index]} className="foto_portifolio" alt={projeto.nome} />
            <h2 id='titulo-home' className={color}>{projeto.nome}</h2>
            <p id='paragrafo' className={color}>{projeto.descricao}</p>
            <span className='tecnologia'>Tecnologia utilizada:<br />{projeto.tecnologias}</span><br />
          </a>
        ))}
      </section>
    </main>
  );
}

export default Portifolio;
