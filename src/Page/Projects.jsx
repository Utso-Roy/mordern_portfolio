import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../src/animation.css";

const projectsData = [
  {
    title: "Launchly",
    description:
      "A modern platform for discovering and sharing tech products like web apps, AI tools, software, games, and mobile apps — inspired by Product Hunt. Users can submit products, upvote/downvote, and post reviews. The platform features user authentication, role-based access (user, moderator, admin), product moderation, and a payment system for unlocking premium features.",
    image: "https://i.ibb.co.com/0yWxygtf/launcly.jpg",
    liveLink: "https://launchly-ai.netlify.app/",
    githubLink: "https://github.com/Utso-Roy/Launchly_Ai",
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
    description: "Indoor Plants Website A modern platform for plant lovers, designed with user experience, interactivity, and scalability in mind.",
    image: "https://i.ibb.co.com/ccnz20xK/indoor-Plants.jpg",
    liveLink: "https://green-ghor.netlify.app/",
    githubLink: "https://github.com/Utso-Roy/Indor_Planets/tree/main/indor_planets_Clients_side",
    tech: [
      "MongoDB",
      "Express.js",
      "Axios",
      "Firebase Authentication",
      "React",
      "JWT",
      "Tanstack Query",
      "Aos",
      "SSLCOMMERZ",
      "Node.js",
    ],
  },
  {
    title: "Project Three",
    description:
      "A responsive volunteer management platform where users can create, update, delete, and request volunteer need posts, join others' posts, and manage their own posts with secure authentication, JWT protection, and a user-friendly UI.",
    image: "https://i.ibb.co.com/938cbSbS/volunteer-Hub.jpg",
    liveLink: "https://volunteers-management-hub.netlify.app/",
    githubLink: "https://github.com/Utso-Roy/Volunteer_Managments",
    tech: [
      "MongoDB",
      "Express",
      "Axios",
      "Firebase Authentication",
      "React",
      "JWT",
      "Node.js",
    ],
  },
];

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  return (
    <section className="my-10 px-6 max-w-screen-xl mx-auto">
      <h2 className="text-center text-base-300 text-3xl font-bold mb-10">
        My Projects
      </h2>

      <div className="flex flex-col divide-y divide-cyan-500/30">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="py-8"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-1/3 h-48 object-cover rounded-lg border-2 border-white "
              />

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-[#00ffff] mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-white/10 text-[#00ffff] border border-cyan-500 rounded-full"
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
                    className=" btn hover:bg-[#00ffff] border border-[#00ffff] hover:text-gray-900 backdrop-blur-2xl shadow-2xl hover:shadow-[#00ffff] text-white bg-white/5"
                  >
                    Live Link
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#00ffff] btn hover:bg-[#00ffff] hover:text-gray-900 backdrop-blur-2xl shadow-2xl hover:shadow-[#00ffff] bg-white/5 text-white"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Horizontal Gradient Divider */}
            {index < projectsData.length - 1 && (
              <div className="h-1 mt-8 bg-gradient-to-r from-transparent via-[#00ffff] to-transparent rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
