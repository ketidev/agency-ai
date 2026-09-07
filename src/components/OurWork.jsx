import { assets } from "../assets/assets";
import Title from "./Title";

const OurWork = () => {
  const workData = [
    {
      id: 1,
      title: "Mobile app marketing",
      description:
        "We turn bold ideas into powerful digital solutions that connect...",
      image: assets.work_mobile_app,
    },
    {
      id: 2,
      title: "Dashboard management",
      description:
        "We turn bold ideas into powerful digital solutions that connect...",
      image: assets.work_dashboard_management,
    },
    {
      id: 3,
      title: "Fitness app promotion",
      description:
        "We turn bold ideas into powerful digital solutions that connect...",
      image: assets.work_fitness_app,
    },
  ];

  return (
    <section
      id="our-work"
      className="flex flex-col items-center gap-7 px-4 pt-30 text-gray-700 dark:text-white sm:px-12 lg:px-24 xl:px-40"
    >
      <Title
        title="Our latest work"
        desc="Browse our portfolio of innovative digital projects that showcase creativity, performance, and results."
      />

      <div className="grid w-full max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {workData.map((work) => (
          <article
            key={work.id}
            className="cursor-pointer transition-all duration-500 hover:scale-102"
          >
            <img
              src={work.image}
              alt={work.title}
              className="w-full rounded-xl"
            />

            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>

            <p className="w-5/6 text-sm opacity-60">{work.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default OurWork;
