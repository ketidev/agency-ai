import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
    </div>
  );
};

export default App;
