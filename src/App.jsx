import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TrustedBy from "./components/TrustedBy";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
    </div>
  );
};

export default App;
