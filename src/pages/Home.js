import Avatar from '../imgs/avatar/myAvatar.svg'
function Home({color}) {
  return (
    <main  id='home' className='container-gerall'>
    <section className="texto-sec">
       <h1 id='titulo-home' className={color}>Olá, Eu Sou <br/>
       <span className="nome">Andre Luis</span><br/>
       Desenvolvedor Front_end</h1>
       <div className="containerbut">
       <a href='https://www.linkedin.com/in/andre-luis-6536b377/' target='_blank' className="but linkedin" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className="img-but"  alt='linkedin'/>
           <h2 id='titulo-home' className={color}>Linkedin</h2>
           </a>
       <a href='https://github.com/andre09999' target='_blank' className="but github" rel="noreferrer">
            <img  className="img-but" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github' />
         <h2 id='titulo-home' className={color}> Github</h2></a>
       </div>
    </section>
    <section>
    <img src={Avatar} className="img-Avatar" alt='avatar' />
    </section>
    </main>
  );
}

export default Home;
