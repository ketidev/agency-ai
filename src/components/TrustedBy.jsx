import { company_logos } from "../assets/assets";

const TrustedBy = () => {
  return (
    <section className="flex flex-col items-center gap-10 px-4 text-gray-700 dark:text-white/80 sm:px-12 lg:px-24 xl:px-40">
      <h2 className="font-semibold">Trusted by Leading Companies</h2>

      <ul className="m-4 flex flex-wrap items-center justify-center gap-10">
        {company_logos.map((logo) => (
          <li key={logo}>
            <img
              src={logo}
              alt=""
              aria-hidden="true"
              className="max-h-5 dark:drop-shadow-xl sm:max-h-6"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TrustedBy;
