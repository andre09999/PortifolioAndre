import { useState } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Portifolio from './pages/Portifolio';

const handleThemeChange = (e, setTheme, setThemeLetter, setChecked, setThemeMode) => {
  if (e.checked) {
    setTheme('dark');
    setThemeLetter('dark-color');
    setChecked('check');
    setThemeMode('Light Mode');
  } else {
    setTheme('light');
    setThemeLetter('light-color');
    setChecked('nocheck');
    setThemeMode('Dark Mode');
  }
};

function App() {
  const [theme, setTheme] = useState('light');
  const [themeMode, setThemeMode] = useState('Dark Mode');
  const [themeLetter, setThemeLetter] = useState('light-color');
  const [checked, setChecked] = useState('nocheck');

  return (
    <div className={theme}>
      <Header />
      <label id='input' className={themeLetter}>
        <div className={checked}>
          <p className='modo'>{themeMode}</p>
          <input type='checkbox' className="inputs" onClick={(e) => handleThemeChange(e.target, setTheme, setThemeLetter, setChecked, setThemeMode)} />
        </div>
      </label>
      <Home color={themeLetter} />
      <Sobre color={themeLetter} />
      <Portifolio color={themeLetter} />
      <Footer />
    </div>
  );
}
export default App;
