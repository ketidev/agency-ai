const Title = ({ title, desc }) => {
  return (
    <header className="flex flex-col items-center">
      <h2 className="text-3xl font-medium sm:text-5xl">{title}</h2>

      <p className="mb-6 max-w-lg text-center text-gray-500 dark:text-white/75">
        {desc}
      </p>
    </header>
  );
};

export default Title;
