import React, { useEffect } from "react";
import AOS from "aos";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiPostman, SiMongodb } from "react-icons/si";
import Aos from "aos";

const skillsData = {
  frontend: [
    {
      name: "HTML",
      icon: <FaHtml5 className="inline mr-2 text-orange-500" />,
      color: "text-orange-500",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="inline mr-2 text-blue-500" />,
      color: "text-blue-500",
    },
    {
      name: "JavaScript",
      icon: <FaJs className="inline mr-2 text-yellow-500" />,
      color: "text-yellow-500",
    },
    {
      name: "React",
      icon: <FaReact className="inline mr-2 text-blue-400" />,
      color: "text-blue-400",
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="inline mr-2 text-cyan-400" />,
      color: "text-cyan-400",
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: <FaNodeJs className="inline mr-2 text-green-400" />,
      color: "text-green-500",
    },
    {
      name: "Express.js",
      icon: <SiExpress className="inline mr-2 text-gray-300" />,
      color: "text-gray-400",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="inline mr-2 text-green-400" />,
      color: "text-green-400",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: <FaGit className="inline mr-2 text-red-500" />,
      color: "text-red-500",
    },
    {
      name: "Postman",
      icon: <SiPostman className="inline mr-2 text-orange-600" />,
      color: "text-orange-500",
    },
  ],
};

const Skill = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  return (
    <section className="py-8  bg-white/5 backdrop-blur-2xl  text-white">
      <div className="w-full max-w-4xl mx-auto px-6">
        <h2
          className="text-4xl font-bold mb-10 text-center text-[#00ffff]"
          data-aos="fade-down"
        >
          My Skills
        </h2>

        <div className="space-y-10">
          {Object.keys(skillsData).map((category) => (
            <div key={category} className="text-center" data-aos="fade-up">
              <h3 className="text-2xl font-semibold text-[#00ffff] capitalize mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {skillsData[category].map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex items-center ${skill.color} text-lg font-medium`}
                    data-aos="zoom-in"
                  >
                    {skill.icon} <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
