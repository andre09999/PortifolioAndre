import Avatar from '../imgs/avatar/myAvatar.svg'
function Home({color}) {
  console.log(color)
  return (
    <main  id='home' className='container-gerall'>
    <section className="texto-sec">
       <h1 className={color}>Olá, Eu Sou <br/>
       <span className="nome">Andre Luis</span><br/>
       Desenvolvedor Front_end</h1>
       <div className="containerbut">
       <button className="but linkedin">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className="img-but"  alt='linkedin'/>
           <h2 className={color}>Linkedin</h2>
           </button>
       <button className="but github">
            <img  className="img-but" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github' />
         <h2 className={color}> Github</h2></button>
       </div>
    </section>
    <section>
    <img src={Avatar} className="img-Avatar" alt='avatar' />
    </section>
    </main>
  );
}

export default Home;
