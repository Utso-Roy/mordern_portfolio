import React, { useEffect, useState } from "react";

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
    title: "Green Ghor",
    description:
      "Indoor Plants Website - A modern platform for plant lovers, designed with user experience, interactivity, and scalability in mind.",
    image: "https://i.ibb.co.com/ccnz20xK/indoor-Plants.jpg",
    liveLink: "https://green-ghor.netlify.app/",
    githubLink:
      "https://github.com/Utso-Roy/Indor_Planets/tree/main/indor_planets_Clients_side",
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
    title: "Cholo",
    description:
"Cholo is a modern ride-sharing platform connecting riders and drivers in real-time. It features secure payments, dynamic fare calculation, live trip tracking, ride history, and driver status updates. Built with scalability and responsiveness, Cholo ensures a smooth and safe experience across devices.",
    image: "https://i.ibb.co.com/cShpf0dr/cholo.jpg",
    liveLink: "https://cholo.netlify.app/",
    githubLink: "https://github.com/Utso-Roy/cholo_ride_sharing_-team-",
    tech: [
      "React.js",
      "Tailwind CSS",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Axios",
      "Firebase Authentication",
      "JWT",
      "Socket.io",
      "SSLCOMMERZ",
      "Swiper.js",
      "AOS",
    ],
  },

  {
    title: "Volunteer Hub",
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
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="min-h-screen  py-12 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <h2 className="text-center text-base-300  md:text-5xl font-bold mb-10">
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                opacity: 0,
                animation: `fadeInUp 0.6s ease-out ${index * 0.2}s forwards`,
              }}
            >
              {/* Card Container */}
              <div className="relative bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/20">
                {/* Gradient Overlay on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-blue-500/5 to-purple-500/0 transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                ></div>

                <div className="flex flex-col lg:flex-row gap-8 p-6 lg:p-8 relative z-10">
                  {/* Image Container */}
                  <div className="lg:w-2/5 relative group/img">
                    <div className="relative overflow-hidden rounded-xl border border-slate-700/50 group-hover/img:border-cyan-500/50 transition-all duration-500">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-60 object-cover transform group-hover/img:scale-110 transition-transform duration-700"
                      />
                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500"></div>

                      {/* Quick Links on Image */}
                      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover/img:opacity-100 transition-all duration-500">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-cyan-400 hover:bg-cyan-400 text-slate-900 px-6 py-2 rounded-lg font-semibold transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
                        >
                          View Live
                        </a>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-slate-800 hover:bg-slate-700 text-cyan-400 px-6 py-2 rounded-lg font-semibold border border-cyan-500/50 transform hover:scale-110 transition-all duration-300"
                        >
                          Code
                        </a>
                      </div>
                    </div>

                    {/* Project Number */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/50">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-3/5 flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t, i) => (
                            <span
                              key={i}
                              className="px-4 py-2 text-sm bg-slate-800/50 text-cyan-300 border border-cyan-500/30 rounded-full hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm"
                              style={{
                                animation:
                                  hoveredIndex === index
                                    ? `slideIn 0.3s ease-out ${i * 0.05}s both`
                                    : "none",
                              }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-4">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1  bg-slate-800/50 border-2 border-cyan-500/50 hover:bg-slate-700/50 text-white px-6 py-3 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 text-center"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-slate-800/50 hover:bg-slate-700/50 text-cyan-400 px-6 py-3 rounded-xl font-semibold border border-cyan-500/50 hover:border-cyan-400 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm text-center"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </section>
  );
};

export default Projects;
