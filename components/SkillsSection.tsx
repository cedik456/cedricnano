import { motion } from "framer-motion";

const SkillsSection = () => {
  const techs = [
    {
      icon: "/tech/typescript-original.svg",
      title: "TypeScript",
      subtitle: "JS but better",
      color: "#2B3644",
    },
    {
      icon: "/tech/react-original.svg",
      title: "React",
      subtitle: "JavaScript Library",
      color: "#364B4C",
    },
    {
      icon: "/tech/nextjs-original.svg",
      title: "NextJS",
      subtitle: "React framework",
      color: "#1A1A1A",
    },
    {
      icon: "/tech/tailwindcss-original.svg",
      title: "Tailwind",
      subtitle: "CSS framework",
      color: "#2D3C4C",
    },
    {
      icon: "/tech/mongodb-original.svg",
      title: "MongoDB",
      subtitle: "Version control",
      color: "#34473D",
    },
    {
      icon: "/tech/express-original.svg",
      title: "ExpressJs",
      subtitle: "Version control",
      color: "#424242",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
      {techs.map((tech, index) => (
        <motion.div
          whileHover={{ y: -4, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 250, damping: 15 }}
          key={index}
          className="flex items-center gap-3  bg-[#303030] py-2 px-2 rounded-xl transition cursor-pointer"
        >
          <div
            className="bg-gray-50/50 rounded-lg p-1"
            style={{ backgroundColor: tech.color }}
          >
            <img src={tech.icon} alt={tech.title} className="w-8 h-8" />
          </div>
          <div>
            <p className="font-semibold text-white">{tech.title}</p>
            <p className="text-xs text-gray-400">{tech.subtitle}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsSection;
