import { teamData } from "../assets/assets";
import Title from "./Title";

const Teams = () => {
  return (
    <section className="flex flex-col items-center gap-7 px-4 pt-30 text-gray-800 dark:text-white sm:px-12 lg:px-24 xl:px-40">
      <Title
        title="Meet the team"
        desc="A passionate team of digital experts dedicated to your brand’s success."
      />

      <ul className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
        {teamData.map((team) => (
          <li key={team.name}>
            <article className="flex items-center gap-5 rounded-xl border border-gray-100 bg-white p-4 shadow-xl shadow-gray-100 transition-all duration-400 hover:scale-103 dark:border-gray-700 dark:bg-gray-900 dark:shadow-white/5 max-sm:flex-col">
              <img
                src={team.image}
                className="h-12 w-12 rounded-full"
                alt={team.name}
              />

              <div className="flex-1">
                <h3 className="text-sm font-bold">{team.name}</h3>
                <p className="text-xs opacity-60">{team.title}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Teams;
