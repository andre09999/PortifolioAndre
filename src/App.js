import { useMemo, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Portifolio from "./pages/Portifolio";

function App() {
  const [isDark, setIsDark] = useState(false);

  const ui = useMemo(() => {
    const theme = isDark ? "dark" : "light";
    const themeLetter = isDark ? "dark-color" : "light-color";
    const toggleClass = isDark ? "check" : "nocheck";
    const themeModeLabel = isDark ? "Light Mode" : "Dark Mode";

    return { theme, themeLetter, toggleClass, themeModeLabel };
  }, [isDark]);

  return (
    <div className={ui.theme}>
     <Header  themeLetter={ui.themeLetter}  toggleClass={ui.toggleClass}  themeModeLabel={ui.themeModeLabel}  isDark={isDark}  onToggle={(v) => setIsDark(v)}/>
      <Home color={ui.themeLetter} />
      <Sobre color={ui.themeLetter} />
      <Portifolio color={ui.themeLetter} />

      <Footer />
    </div>
  );
}

export default App;
