import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <header
      id="hero"
      className="flex w-full flex-col items-center gap-6 overflow-hidden px-4 py-20 text-center text-gray-700 dark:text-white sm:px-12 lg:px-24 xl:px-40"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-gray-300 p-1.5 pr-4">
        <img src={assets.group_profile} className="w-20" alt="Our community" />

        <p className="text-xs font-medium">Trusted by 10k+ people</p>
      </div>

      <h1 className="max-w-5xl text-4xl font-medium sm:text-5xl md:text-6xl xl:text-[84px] xl:leading-[95px]">
        Turning imagination into{" "}
        <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
          digital
        </span>{" "}
        impact.
      </h1>

      <p className="max-w-4/5 pb-3 text-sm font-medium text-gray-500 dark:text-white/75 sm:max-w-lg sm:text-lg">
        Creating meaningful connections and turning big ideas into interactive
        digital experiences.
      </p>

      <figure className="relative">
        <img
          src={assets.hero_img}
          alt="Digital experience showcase"
          className="w-full max-w-6xl"
        />

        <img
          src={assets.bgImage1}
          alt=""
          aria-hidden="true"
          className="absolute -top-40 -right-40 -z-1 dark:hidden sm:-top-100 sm:-right-70"
        />
      </figure>
    </header>
  );
};

export default Hero;
