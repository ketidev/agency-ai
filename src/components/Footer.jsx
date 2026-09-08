import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="mt-20 bg-slate-50 px-4 pt-6 dark:bg-gray-900 sm:mt-40 sm:px-10 lg:px-24 xl:px-40">
      <div className="flex flex-col items-center justify-between gap-4 py-6 text-sm text-gray-500 sm:flex-row">
        <p>&copy; 2026 </p>

        <a
          href="https://www.linkedin.com/in/ketikhetsuriani/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="w-4" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
