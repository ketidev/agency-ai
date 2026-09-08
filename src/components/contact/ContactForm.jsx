import {
  faArrowRight,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast from "react-hot-toast";

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
const API_URL = import.meta.env.VITE_WEB3FORMS_API_URL;

const ContactForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", ACCESS_KEY);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || "Something went wrong.");
      }

      toast.success("Thank you for your submission!");
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(error.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5"
    >
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
            className="w-full bg-transparent p-3 text-sm outline-none"
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
            className="w-full bg-transparent p-3 text-sm outline-none"
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
          className="w-full rounded-lg border border-gray-300 bg-transparent p-3 text-sm outline-none dark:border-gray-600"
        />
      </label>

      <button
        type="submit"
        className="flex w-max cursor-pointer items-center gap-2 rounded-full bg-primary px-10 py-3 text-sm text-white transition-transform hover:scale-103"
      >
        <span>Submit</span>

        <FontAwesomeIcon
          icon={faArrowRight}
          aria-hidden="true"
          className="w-4"
        />
      </button>
    </form>
  );
};

export default ContactForm;
