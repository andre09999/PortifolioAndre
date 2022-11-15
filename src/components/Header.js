import menuBar from '../imgs/nav/menu-bar.png'
import {useState} from "react";

function Header() {
  const [nav,SetNav]= useState('lista')
  const navBar = (e) => {
    if(e) SetNav('lista1')
    if(e === false) SetNav('lista')
  }
  return (
      <header>
        <h1 className='titulo-header'>{"<AL/>"}</h1>
        <h1 className='titulo'>Portifolio</h1>
       <nav className='nav-header' id="check">
        <ul className={nav}>
          <li className='linksli'><a href='#home' className='linksA'>Home</a></li>
          <li className='linksli'><a href='#sobre' className='linksA'>Sobre</a></li>
          <li className='linksli'><a href='#portifolio' className='linksA'>Portifolio</a></li>
          </ul> 
		  <label className="checkbtn" >
          <input type="checkbox" id="check1" onChange={({target}) => navBar(target.checked)}/>
			<img src={menuBar} className="fas fa-bars" alt="menu bar"></img>
		</label>    
       </nav>
       
      </header>
  );
}

export default Header;
