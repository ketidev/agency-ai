import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";

const ServiceCard = ({ service }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const cardRef = useRef(null);

  const handleMouseMove = (event) => {
    const bounds = cardRef.current.getBoundingClientRect();

    setPosition({
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    });
  };

  return (
    <article
      ref={cardRef}
      className="relative m-2 max-w-lg overflow-hidden rounded-xl border border-gray-200 shadow-2xl shadow-gray-100 dark:border-gray-700 dark:shadow-white/10 sm:m-4"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute z-0 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 blur-2xl mix-blend-lighten transition-opacity duration-500 ${
          visible ? "opacity-70" : "opacity-0"
        }`}
        style={{
          top: position.y - 150,
          left: position.x - 150,
        }}
      />

      <div className="relative z-10 flex items-center gap-10 rounded-[10px] bg-white p-8 transition-all hover:m-0.5 hover:p-7.5 dark:bg-gray-900">
        <figure className="rounded-full bg-gray-100 dark:bg-gray-700">
          <FontAwesomeIcon
            icon={service.icon}
            aria-hidden="true"
            className="m-2 max-w-24 rounded-full bg-white dark:bg-gray-900"
          />
        </figure>

        <div className="flex-1">
          <h3 className="font-bold">{service.title}</h3>

          <p className="mt-2 text-sm">{service.description}</p>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
