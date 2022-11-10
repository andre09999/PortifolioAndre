import Avatar from '../imgs/fotoPessoal/IMG_20210611_134037_195.jpg'
function Sobre() {
  return (
    <main  id='sobre' className='container-geral'>
         <section>
    <img src={Avatar} className="img-Avatar" alt='avatar' />
    </section>
    <section className="texto-sec">
       <h1>SOBRE MIM</h1>
       <h3>Goiânia, Goiás</h3>
       <p className='historia'>Me chamo Andre,<br/>  Tenho 27 anos sou formado em gestão de recursos humanos e técnico em informatica tenho paixão pelaa area de tecnologia.
<br/>
Fiz curso de desenvolvimento web fullstack na trybe durante 1 ano para aperfeiçoar meus conhecimentos na area.
<br/>
Porem estudo nesta area de desenvolvimento web ha 2 anos e meio.</p>
    </section>
    </main>
  );
}

export default Sobre;
