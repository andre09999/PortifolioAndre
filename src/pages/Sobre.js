import Avatar from '../imgs/fotoPessoal/315191556_5496258120490689_3663881283572641793_n.jpeg'
function Sobre({color}) {
  return (
    <main  id='sobre' className='container-geral'>
         <section>
    <img src={Avatar} className="img-Avatar pessoal" alt='avatar' />
    </section>
    <section className="texto-sec">
       <h1 className={color}>SOBRE MIM</h1>
       <h3 className={color}>Goiânia, Goiás</h3>
       <p id='historia' className={color}>Me chamo Andre,<br/>  Tenho 27 anos sou formado em gestão de recursos humanos e técnico em informatica tenho paixão pelaa area de tecnologia.
<br/>
Fiz curso de desenvolvimento web fullstack na trybe durante 1 ano para aperfeiçoar meus conhecimentos na area.
<br/>
Porem estudo nesta area de desenvolvimento web ha 2 anos e meio.</p>
    </section>
    </main>
  );
}

export default Sobre;
