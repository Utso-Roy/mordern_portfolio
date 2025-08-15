import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { SiJavascript, SiRedux } from "react-icons/si";
import { FaBookOpen, FaProjectDiagram } from "react-icons/fa";

const Learning = () => {
  const topics = [
  {
    icon: <SiRedux size={40} className="text-purple-400" />,
    title: "RTK Query Mastery",
    description:
      "Learn how to efficiently manage server state in React using Redux Toolkit Query with caching and auto-fetching.",
  },
  {
    icon: <SiJavascript size={40} className="text-yellow-400" />,
    title: "Advanced JavaScript",
    description:
      "Deep dive into closures, async/await, prototypes, and other advanced JavaScript concepts.",
  },
  {
    icon: <FaProjectDiagram size={40} className="text-green-400" />,
    title: "Project Building",
    description:
      "Apply your skills by building complex, real-world applications step-by-step.",
  },
]
  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="min-h-screen  py-10 px-6">
      <h1
        data-aos="fade-down"
        className="text-3xl font-bold flex gap-2 justify-center items-center text-white mb-12"
      >
        <FaBookOpen /> Learning Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {topics.map((topic, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            className=" backdrop-blur-2xl bg-white/5 rounded-2xl p-6  shadow-lg hover:shadow-[#00ffff] transition cursor-pointer"
          >
            <div className="flex justify-center mb-4">{topic.icon}</div>
            <h2 className="text-xl font-semibold text-white text-center mb-2">
              {topic.title}
            </h2>
            <p className="text-gray-400 text-center">{topic.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learning;
