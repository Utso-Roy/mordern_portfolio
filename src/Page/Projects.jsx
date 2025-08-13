import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../src/animation.css";

const projectsData = [
  {
    title: "Launchly",
    description:
      "A responsive volunteer management platform where users can create, update, delete, and request volunteer need posts, join others' posts, and manage their own posts with secure authentication, JWT protection, and a user-friendly UI.",
    image: "https://i.ibb.co.com/DHYWggFg/laptop.png",
    liveLink: "https://example.com/project-one",
    githubLink: "https://github.com/username/project-one",
    tech: [
      "MongoDB",
      "Express",
      "Axios",
      "Firebase Authentication",
      "React",
      "JWT",
      "Stripe",
      "Node.js",
    ],
  },
  {
    title: "Project Two",
    description:
      "A responsive volunteer management platform where users can create, update, delete, and request volunteer need posts, join others' posts, and manage their own posts with secure authentication, JWT protection, and a user-friendly UI.",
    image: "https://i.ibb.co.com/DHYWggFg/laptop.png",
    liveLink: "https://example.com/project-two",
    githubLink: "https://github.com/username/project-two",
    tech: [
      "MongoDB",
      "Express",
      "Axios",
      "Firebase Authentication",
      "React",
      "JWT",
      "Stripe",
      "Node.js",
    ],
  },
  {
    title: "Project Three",
    description:
      "A responsive volunteer management platform where users can create, update, delete, and request volunteer need posts, join others' posts, and manage their own posts with secure authentication, JWT protection, and a user-friendly UI.",
    image: "https://i.ibb.co.com/DHYWggFg/laptop.png",
    liveLink: "https://example.com/project-three",
    githubLink: "https://github.com/username/project-three",
    tech: [
      "MongoDB",
      "Express",
      "Axios",
      "Firebase Authentication",
      "React",
      "JWT",
      "Stripe",
      "Node.js",
    ],
  },
];

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  return (
    <section className="my-10 px-5 max-w-screen-xl mx-auto">
      <h2 className="text-center text-[#00ffff] text-4xl font-bold mb-10">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="relative group"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Gradient Border */}
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-border pointer-events-none"></div>

            {/* Card */}
            <div className="relative bg-gray-800 rounded-xl p-5 flex flex-col gap-3 border-4 border-gray-700 transition-all duration-300">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-gray-300">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-white/10 text-cyan-400 border border-cyan-500 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-4 flex gap-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline btn hover:bg-[#00ffff] hover:text-gray-900 backdrop-blur-2xl shadow-2xl hover:shadow-[#00ffff] text-white bg-white/5"
                >
                  Live Link
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline btn hover:bg-[#00ffff] hover:text-gray-900 backdrop-blur-2xl shadow-2xl hover:shadow-[#00ffff] bg-white/5 text-white"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
