import React, { useMemo } from "react";
import projetos from "../dados/dados.json";

function Portifolio({ color }) {
  const sorted = useMemo(() => {
    return [...projetos].sort((a, b) => Number(b.destaque) - Number(a.destaque));
  }, []);

  return (
    <main id="portifolio" className="projetos-cont">
      <h1 id="titulo-Projetos" className={color}>
        Projetos
      </h1>

      <section className="projetos">
        {sorted.map((p) => (
          <article key={p.id || p.nome} className="card">
            <img
              src={require(`../imgs/Projetos/${p.imagem}`)}
              className="foto_portifolio"
              alt={p.nome}
              loading="lazy"
            />

            <div className="card-body">
              <div className="card-head">
                <h2 className={`card-title ${color}`}>{p.nome}</h2>
                {p.tipo && <span className="badge">{p.tipo}</span>}
              </div>

              <p className={`card-desc ${color}`}>{p.descricaoCurta || p.descricao}</p>

              {/* Tags */}
              <div className="tags">
                {(p.tecnologias || []).slice(0, 6).map((t) => (
                  <span key={t} className="tecnologia">
                    {t}
                  </span>
                ))}
              </div>

              {/* Features rápidas */}
              {Array.isArray(p.features) && p.features.length > 0 && (
                <ul className={`features ${color}`}>
                  {p.features.slice(0, 3).map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              )}

              {/* Links */}
              <div className="links-projeto">
                <a href={p.demo || p.link} target="_blank" rel="noreferrer" className="link-btn">
                  Demo
                </a>

                {p.repo ? (
                  <a href={p.repo} target="_blank" rel="noreferrer" className="link-btn outline">
                    Código
                  </a>
                ) : (
                  <span className="link-btn outline disabled" title="Repositório ainda não publicado">
                    Código
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Portifolio;
