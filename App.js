import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Portifolio from './pages/Portifolio';
function App() {
  return (
    <div className="App">
      <Header/>
       <Home/>
       <Sobre/>
       <Portifolio />
      <Footer/>
    </div>
  );
}

export default App;
