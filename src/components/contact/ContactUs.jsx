import Title from "../Title";
import ContactForm from "./ContactForm";

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

      <ContactForm />
    </section>
  );
};

export default ContactUs;
