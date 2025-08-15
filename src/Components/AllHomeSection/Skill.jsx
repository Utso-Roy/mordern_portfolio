import React, { useEffect } from "react";
import Aos from "aos";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiPostman, SiMongodb } from "react-icons/si";
import { MdOutlineCategory } from "react-icons/md";

const skillsData = {
  frontend: [
    { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500" },
    { name: "React", icon: <FaReact />, color: "text-blue-400" },
    { name: "TailwindCSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-400" },
    { name: "Express.js", icon: <SiExpress />, color: "text-gray-300" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
  ],
  tools: [
    { name: "Git", icon: <FaGit />, color: "text-red-500" },
    { name: "Postman", icon: <SiPostman />, color: "text-orange-600" },
  ],
};

const Skill = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);

  return (
    <section className="py-12  text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-4xl font-bold mb-12 text-center text-base-300"
          data-aos="fade-down"
        >
          My Skills
        </h2>

        <div className="space-y-8">
          {Object.keys(skillsData).map((category) => (
            <div
              key={category}
              className="flex flex-wrap items-center justify-center gap-6"
              data-aos="fade-up"
            >
              {/* Category Header with icon */}
              <div className="flex items-center gap-2 bg-gray-800/40 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg hover:shadow-[#00ffff] hover:scale-105 transform transition duration-300">
                <MdOutlineCategory className="text-[#00ffff] text-xl" />
                <span className="text-lg font-semibold text-[#00ffff]">
                  {category.toUpperCase()}
                </span>
              </div>

              {/* Skills Horizontal */}
              {skillsData[category].map((skill) => (
                <div
                  key={skill.name}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl shadow-md hover:shadow-[#00ffff] hover:scale-105 transform transition duration-300 ${skill.color} bg-gray-800/40 backdrop-blur-md`}
                >
                  {skill.icon} <span className="font-medium text-white">{skill.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
