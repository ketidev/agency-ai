import { companies } from "../data/companies";

const TrustedBy = () => {
  return (
    <section className="flex flex-col items-center gap-10 px-4 text-gray-700 dark:text-white/80 sm:px-12 lg:px-24 xl:px-40">
      <h2 className="font-semibold">Trusted by Leading Companies</h2>

      <ul className="m-4 flex flex-wrap items-center justify-center gap-10">
        {companies.map(({ id, name, logo }) => (
          <li key={id}>
            <img
              src={logo}
              alt={name}
              className="max-h-5 dark:drop-shadow-xl sm:max-h-6"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TrustedBy;
