import {
    faArrowRight,
    faEnvelope,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Title from "./Title";

const ContactUs = () => {
  return (
    <section
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 pt-30 text-gray-700 dark:text-white sm:px-12 lg:px-12 xl:px-40"
    >
      <Title
        title="Reach out to us"
        desc="Ready to grow your brand? Let’s connect and build something exceptional together."
      />

      <form className="grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
        <label className="flex flex-col gap-2 text-sm font-medium">
          <span>Your Name</span>

          <span className="flex rounded-lg border border-gray-300 pl-3 dark:border-gray-600">
            <FontAwesomeIcon icon={faUser} className="my-auto w-4" />

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </span>
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium">
          <span>Email</span>

          <span className="flex rounded-lg border border-gray-300 pl-3 dark:border-gray-600">
            <FontAwesomeIcon icon={faEnvelope} className="my-auto w-4" />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </span>
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium sm:col-span-2">
          <span>Message</span>

          <textarea
            name="message"
            rows={8}
            placeholder="Enter your message"
            className="w-full rounded-lg border border-gray-300 p-3 text-sm outline-none dark:border-gray-600"
            required
          />
        </label>

        <button
          type="submit"
          className="flex w-max cursor-pointer gap-2 rounded-full bg-primary px-10 py-3 text-sm text-white transition-all hover:scale-103"
        >
          Submit
          <FontAwesomeIcon icon={faArrowRight} className="my-auto w-4" />
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
