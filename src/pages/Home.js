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
           <a href='https://www.linkedin.com/in/andre-luis-6536b377/' target='_blank' className={color} rel="noreferrer">Linkedin</a>
           </button>
       <button className="but github">
            <img  className="img-but" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github' />
         <a  href='https://github.com/andre09999' target='_blank' className={color} rel="noreferrer"> Github</a></button>
       </div>
    </section>
    <section>
    <img src={Avatar} className="img-Avatar" alt='avatar' />
    </section>
    </main>
  );
}

export default Home;
