import { assets } from "../assets/assets";
import { servicesData } from "../data/services";
import ServiceCard from "./ServiceCard";
import Title from "./Title";

const Services = () => {
  return (
    <section
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 pt-30 text-gray-700 dark:text-white sm:px-12 lg:px-24 xl:px-40"
    >
      <img
        src={assets.bgImage2}
        alt=""
        aria-hidden="true"
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />

      <Title
        title="How can we help?"
        desc="From Strategy to execution, we craft digital solutions that move your business forward."
      />

      <div className="grid grid-cols-1 md:grid-cols-2">
        {servicesData.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
