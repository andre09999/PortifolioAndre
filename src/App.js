import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Portifolio from "./pages/Portifolio";

const getInitialTheme = () => {
  const savedTheme = window.localStorage.getItem("portfolio-theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
};

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  return (
    <div className="app">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <Home />
      <Sobre />
      <Portifolio />
      <Footer />
    </div>
  );
}

export default App;
