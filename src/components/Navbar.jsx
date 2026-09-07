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
        className={`text-gray-700 dark:text-white sm:text-sm ${
          !sidebarOpen
            ? "max-sm:w-0 max-sm:overflow-hidden"
            : "max-sm:w-60 max-sm:pl-10"
        } fixed right-0 top-0 bottom-0 flex gap-5 transition-all max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:pt-20 sm:static sm:items-center`}
      >
        <button
          type="button"
          onClick={closeSidebar}
          className="absolute right-4 top-4 sm:hidden"
          aria-label="Close navigation menu"
        >
          <img
            src={assets.close_icon}
            alt=""
            className="w-5"
            aria-hidden="true"
          />
        </button>

        <ul className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <li>
            <a href="#" onClick={closeSidebar} className="sm:hover:border-b">
              Home
            </a>
          </li>

          <li>
            <a
              href="#services"
              onClick={closeSidebar}
              className="sm:hover:border-b"
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#our-work"
              onClick={closeSidebar}
              className="sm:hover:border-b"
            >
              Our Work
            </a>
          </li>

          <li>
            <a
              href="#contact-us"
              onClick={closeSidebar}
              className="sm:hover:border-b"
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
          className="cursor-pointer sm:hidden"
          aria-label="Open navigation menu"
          aria-expanded={sidebarOpen}
          aria-controls="mobile-navigation"
        >
          <img
            src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
            alt=""
            className="w-8"
            aria-hidden="true"
          />
        </button>

        <a
          href="#contact-us"
          className="flex cursor-pointer items-center gap-2 rounded-full bg-primary px-6 py-2 text-sm text-white transition-all hover:scale-103 max-sm:hidden"
        >
          Connect
          <img src={assets.arrow_icon} width={14} alt="" aria-hidden="true" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
