import Avatar from '../imgs/fotoPessoal/315191556_5496258120490689_3663881283572641793_n.jpeg';
import '../App.css';

function Sobre({ color }) {
  return (
    <main id='sobre' className='container-geral'>
      <section>
        <img src={Avatar} className="pessoal" alt='avatar' />
      </section>
      <section className="texto-sec text">
        
          <h1 id='historia' className={color}>SOBRE MIM</h1>
          <h3 id='historia' className={color}>Goiânia, Goiás</h3>
          <p id='historia' className={color}>
            Me chamo Andre,
            <br /> Tenho 28 anos, sou formado em gestão de recursos humanos e técnico em informática e agora estou cursando Ciência da Computação, tenho paixão pela área de tecnologia.
            <br />
            Fiz curso de desenvolvimento web fullstack na Trybe durante 1 ano para aperfeiçoar meus conhecimentos na área.
            <br />
            Porém, estudo nesta área de desenvolvimento web há 2 anos e meio.
          </p>
      
      </section>
    </main>
  );
}

export default Sobre;
