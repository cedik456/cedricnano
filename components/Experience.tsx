import { experiences } from "@/app/contents/experiences";

const Experience = () => {
  return (
    <section className="py-10 mx-auto container max-w-5xl md:px-0 px-4">
      <h1 className="text-xl md:text-2xl mb-4 font-semibold">Experience</h1>
      <div className="relative border-l border-gray-700">
        {experiences.map((experience, index) => (
          <div className="relative mb-12 ml-6" key={index}>
            <span className="absolute -left-8 top-1 w-4 h-4  bg-gray-300 rounded-full "></span>

            <a
              href="#"
              className="text-gray-300 font-medium text-lg hover:underline"
            >
              {experience.company}
            </a>
            <h3 className="text-xl font-semibold text-white">
              {experience.role}
              <span className="ml-2 text-xs bg-gray-700 px-2 py-1 rounded">
                {experience.type}
              </span>
            </h3>
            <p className="text-gray-400 text-sm mb-2">{experience.date}</p>
            <p className="text-gray-300 leading-relaxed">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
