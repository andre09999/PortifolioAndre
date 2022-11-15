import foto from '../imgs/Projetos/App de receita.jpg'
import foto1 from '../imgs/Projetos/Historia Do Android.jpg'
import foto2 from '../imgs/Projetos/Online Store.jpg'
import foto3 from '../imgs/Projetos/Starwars.jpg'
import foto4 from '../imgs/Projetos/Trivia.jpg'
import foto5 from '../imgs/Projetos/trynfu.jpg'
import foto6 from '../imgs/Projetos/tune.jpg'
import foto7 from '../imgs/Projetos/wallet.jpg'
function Portifolio({color}) {
  return (
    <main id='portifolio' className='projetos-cont'>
        <h1  id='titulo-Projetos' className={color}>Projetos</h1>
        <section className='projetos'>
        <a target='_blank' href='https://andre09999.github.io/App-De-Receitas/' rel="noreferrer"><img src={foto} className="foto_portifolio" alt='avatar' />

        <h2  id='titulo-home' className={color}>Projeto App de receita</h2>
        <p id='paragrafo' className={color}>Este projeto foi consumido 2 api de receitas uma de bebidas e outra de comida com parte para fazer login favoritar e finalizar receitas</p>
        <span className='tecnologia'>Tecnologia utilizada:<br/>
        Html, Css, Js, React</span><br/>
        </a>

        <a target='_blank' href='https://andre09999.github.io/projeto-android/' rel="noreferrer"><img src={foto1} className="foto_portifolio" alt='avatar' />

        <h2  id='titulo-home' className={color}>Projeto Historia do android</h2>
        <p id='paragrafo' className={color}>Este projeto foi feito no curso do Gustavo guanabara no youtube</p>
        <span className='tecnologia'>Tecnologia utilizada:<br/>
        Html, Css</span><br/>
        </a>

        <a target='_blank' href='https://andre09999.github.io/Store/' rel="noreferrer"><img src={foto2} className="foto_portifolio" alt='avatar' />

        <h2  id='titulo-home' className={color}>Projeto Online store</h2>
        <p id='paragrafo' className={color}>Este projeto foi consumido api do mercado livre simulando um site para compras online</p>
        <span className='tecnologia'>Tecnologia utilizada:<br/>
        Html, Css, Js, React</span><br/>
        </a>

        <a target='_blank' href='https://andre09999.github.io/starwars-planets-search/' rel="noreferrer"><img src={foto3} className="foto_portifolio" alt='avatar' />

        <h2  id='titulo-home' className={color}>Projeto Starwars</h2>
        <p id='paragrafo' className={color}>Este projeto foi consumido api do starwars falando sobre os planetas do filme e com filtros para localizar melhor o que procura</p>
        <span className='tecnologia'>Tecnologia utilizada:<br/>
        Html, Css, Js, React</span><br/>
        </a>
        <a target='_blank' href='https://andre09999.github.io/Trivia/' rel="noreferrer"><img src={foto4} className="foto_portifolio" alt='avatar' />

        <h2  id='titulo-home' className={color}>Projeto Trivia</h2>
        <p id='paragrafo' className={color}>Este projeto foi consumido api do de jogo trivia</p>
        <span className='tecnologia'>Tecnologia utilizada:<br/>
        Html, Css, Js, React</span><br/>
        </a>

        <a target='_blank' href='https://andre09999.github.io/TrybeWarts/' rel="noreferrer"><img src={foto5} className="foto_portifolio" alt='avatar' />

        <h2  id='titulo-home' className={color}>Projeto Tryunfu</h2>
        <p id='paragrafo' className={color}>Este projeto foi feito com base em jogo de tryunfu porem este e para cração de cartas</p>
        <span className='tecnologia'>Tecnologia utilizada:<br/>
        Html, Css, Js, React</span><br/>
        </a>

        <a target='_blank' href='https://andre09999.github.io/Tunes/' rel="noreferrer"><img src={foto6} className="foto_portifolio" alt='avatar' />

        <h2  id='titulo-home' className={color}>Projeto Tunes</h2>
        <p id='paragrafo' className={color}>Este projeto foi feito consumindo api gratuita do itunes</p>
        <span className='tecnologia'>Tecnologia utilizada:<br/>
        Html, Css, Js, React</span><br/>
        </a>

        <a target='_blank' href='https://andre09999.github.io/Wallet/' rel="noreferrer"><img src={foto7} className="foto_portifolio" alt='avatar' />

        <h2  id='titulo-home' className={color}>Projeto Wallet</h2>
        <p id='paragrafo' className={color}>Este projeto foi simulando uma carteira digital para monitorar os gastos fazendo soma conversão de valores</p>
        <span className='tecnologia'>Tecnologia utilizada:<br/>
        Html, Css, Js, React</span><br/>
        </a>
        </section>
    </main>
  );
}

export default Portifolio;
