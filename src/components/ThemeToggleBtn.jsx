import { useEffect } from "react";
import { assets } from "../assets/assets";

const ThemeToggleBtn = ({ theme, setTheme }) => {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
      return;
    }

    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    setTheme(prefersDarkMode ? "dark" : "light");
  }, [setTheme]);

  useEffect(() => {
    if (!theme) return;

    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="cursor-pointer"
    >
      <img
        src={theme === "dark" ? assets.sun_icon : assets.moon_icon}
        alt=""
        aria-hidden="true"
        className="size-8.5 rounded-full border border-gray-500 p-1.5"
      />
    </button>
  );
};

export default ThemeToggleBtn;
