import {useState} from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Portifolio from './pages/Portifolio';


function App() {
  const [theme,SetTheme]= useState('light')
  const [thememode,SetThememode]= useState('Dark Mode')
  const [themeletter,SetThemeletter]= useState('light-color')
  const [checkd,Setcheckd]= useState('nocheck')
  const temas = (e) => {
    console.log(e.checked)
    if(e.checked){
      SetTheme('darck')
      SetThemeletter('darck-color')
      Setcheckd('check')
      SetThememode('Ligth Mode')
    }
    else{
      SetTheme('light')
      SetThemeletter('light-color')
      Setcheckd('nocheck')
      SetThememode('Dark Mode')
    }
  }
  return (
    <div className={theme}>
      <Header/>
      <label id='input' className={themeletter}>
      <div className={checkd}>
      <p  className='modo'>{thememode}</p>
       <input type='checkbox' className="inputs" onClick={(e)=>{temas(e.target)}}/>
       </div>
       </label>
       <Home color={themeletter} />
       <Sobre color={themeletter}/>
       <Portifolio color={themeletter}/>
      <Footer/>
    </div>
  );
}

export default App;
