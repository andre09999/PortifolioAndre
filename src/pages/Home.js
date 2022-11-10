import Avatar from '../imgs/avatar/myAvatar.svg'
function Home() {
  return (
    <main  id='home' className='container-gerall'>
    <section className="texto-sec">
       <h1>Olá, Eu Sou <br/>
       <span className="nome">Andre Luis</span><br/>
       Desenvolvedor Front_end</h1>
       <div className="containerbut">
       <button className="but linkedin">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className="img-but"  alt='linkedin'/>
           Linkedin
           </button>
       <button className="but github">
            <img  className="img-but" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github' />
          Github</button>
       </div>
    </section>
    <section>
    <img src={Avatar} className="img-Avatar" alt='avatar' />
    </section>
    </main>
  );
}

export default Home;
