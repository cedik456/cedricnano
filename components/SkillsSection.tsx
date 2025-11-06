import { techs } from "@/app/contents/main-tech";
import { motion } from "framer-motion";

const SkillsSection = () => {
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
