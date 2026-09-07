import {
    faArrowRight,
    faEnvelope,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactForm = () => {
  return (
    <form className="grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
      <label htmlFor="name" className="flex flex-col gap-2 text-sm font-medium">
        <span>Your Name</span>

        <div className="flex rounded-lg border border-gray-300 pl-3 dark:border-gray-600">
          <FontAwesomeIcon
            icon={faUser}
            aria-hidden="true"
            className="my-auto w-4"
          />

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            autoComplete="name"
            required
            className="w-full p-3 text-sm outline-none"
          />
        </div>
      </label>

      <label
        htmlFor="email"
        className="flex flex-col gap-2 text-sm font-medium"
      >
        <span>Email</span>

        <div className="flex rounded-lg border border-gray-300 pl-3 dark:border-gray-600">
          <FontAwesomeIcon
            icon={faEnvelope}
            aria-hidden="true"
            className="my-auto w-4"
          />

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            required
            className="w-full p-3 text-sm outline-none"
          />
        </div>
      </label>

      <label
        htmlFor="message"
        className="flex flex-col gap-2 text-sm font-medium sm:col-span-2"
      >
        <span>Message</span>

        <textarea
          id="message"
          name="message"
          rows={8}
          placeholder="Enter your message"
          required
          className="w-full rounded-lg border border-gray-300 p-3 text-sm outline-none dark:border-gray-600"
        />
      </label>

      <button
        type="submit"
        className="flex w-max cursor-pointer gap-2 rounded-full bg-primary px-10 py-3 text-sm text-white transition-all hover:scale-103"
      >
        Submit
        <FontAwesomeIcon
          icon={faArrowRight}
          aria-hidden="true"
          className="my-auto w-4"
        />
      </button>
    </form>
  );
};

export default ContactForm;
