import {
  faArrowRight,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { assets } from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <nav
      className="sticky top-0 z-20 flex items-center justify-between bg-white/50 px-4 py-4 font-medium backdrop-blur-xl dark:bg-gray-900/70 sm:px-12 lg:px-24 xl:px-40"
      aria-label="Main navigation"
    >
      <a href="#" aria-label="Go to homepage">
        <img
          src={theme === "dark" ? assets.logo_dark : assets.logo}
          alt="Company logo"
        />
      </a>
      <div
        id="mobile-navigation"
        className={`fixed right-0 top-0 bottom-0 z-30 flex min-h-screen flex-col gap-5 bg-primary pt-20 text-white transition-all duration-300 lg:static lg:z-auto lg:min-h-0 lg:flex-row lg:items-center lg:bg-transparent lg:pt-0 lg:text-gray-700 lg:dark:text-white ${
          sidebarOpen ? "w-60 pl-10" : "w-0 overflow-hidden lg:w-auto lg:pl-0"
        }`}
      >
        <button
          type="button"
          onClick={closeSidebar}
          className="absolute right-4 top-4 lg:hidden"
          aria-label="Close navigation menu"
        >
          <FontAwesomeIcon icon={faXmark} className="w-5" />
        </button>

        <ul className="flex flex-col gap-5 lg:flex-row lg:items-center">
          <li>
            <a href="#" onClick={closeSidebar} className="lg:hover:border-b">
              Home
            </a>
          </li>

          <li>
            <a
              href="#services"
              onClick={closeSidebar}
              className="lg:hover:border-b"
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#our-work"
              onClick={closeSidebar}
              className="lg:hover:border-b"
            >
              Our Work
            </a>
          </li>

          <li>
            <a
              href="#contact-us"
              onClick={closeSidebar}
              className="lg:hover:border-b"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="cursor-pointer lg:hidden"
          aria-label="Open navigation menu"
          aria-expanded={sidebarOpen}
          aria-controls="mobile-navigation"
        >
          <FontAwesomeIcon icon={faBars} className="w-6" />
        </button>
        <a
          href="#contact-us"
          className="hidden items-center gap-2 rounded-full bg-primary px-6 py-2 text-sm text-white transition-transform hover:scale-103 lg:flex"
        >
          <span>Connect</span>
          <FontAwesomeIcon icon={faArrowRight} className="w-3.5" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
