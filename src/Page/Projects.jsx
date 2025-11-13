import React, { useEffect, useState } from "react";

const projectsData = [
  {
    title: "MonoLense",
    description:
      "A visually stunning photography portfolio website built with Next.js and Tailwind CSS. It showcases the photographer’s event, travel, and portrait photography works with a clean, responsive design. Features include a categorized gallery, lightbox image viewer, smooth animations using Framer Motion, and a contact form for booking inquiries.",
    image: "https://i.ibb.co.com/JLzs1LK/monoLens.jpg",
    liveLink: "https://mnonolens-website.vercel.app/",
    githubLink: "https://github.com/Utso-Roy/Photographar_website",
    tech: [
      "Next.js",
      "Tailwind CSS",
       "Swiper.js",
      "Framer Motion",
      "Next/Image",
      "Vercel",
    ],
    type: "Frontend Design Project",
  },
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
    type: "Frontend and Backend Design Project",
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
    type: "Frontend and Backend Design Project",
  },
  {
    title: "Cholo (Team Project)",
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
    type: "Frontend and Backend Design Project",
    contribution:
      "As the Team Leader, I designed the full Landing Page and developed the Rider Dashboard using React and Tailwind CSS. I also implemented real-time driver updates with Socket.io and integrated SSLCOMMERZ for payments, ensuring a modern, user-friendly experience.",
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
    type: "Frontend and Backend Design Project",
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="min-h-screen py-12 px-4 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-cyan-500/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-center text-white text-4xl md:text-5xl font-bold mb-12">
          My Projects
        </h2>

        <div className="space-y-10">
          {projectsData.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 shadow-xl hover:shadow-cyan-500/20 transition-all duration-500"
            >
              {/* Project Header */}
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Image Section */}
                <div className="lg:w-2/5 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl w-full h-60 object-cover border border-slate-700 hover:border-cyan-400 transition-all duration-500"
                  />
                  {project.title.includes("Cholo") && (
                    <div className="bg-slate-800/70 border border-cyan-500/40 rounded-xl p-4 mt-4">
                      <h4 className="text-cyan-400 text-sm font-semibold uppercase mb-2">
                        My Contribution (Team Leader)
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {project.contribution}
                      </p>
                    </div>
                  )}
                </div>

                {/* Description Section */}
                <div className="lg:w-3/5">
                  <h3 className="text-3xl font-bold text-white mb-2 hover:text-cyan-400 transition">
                    {project.title}
                  </h3>
                  <p className="text-cyan-400 font-medium mb-3">
                    {project.type}
                  </p>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  {/* Tech Stack */}
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2 uppercase">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-800/60 text-cyan-300 text-sm border border-cyan-500/20 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-cyan-500/10 border border-cyan-400 text-cyan-300 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-500/20 hover:text-white transition-all text-center"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-800/70 border border-slate-600 text-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-slate-700 transition-all text-center"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
