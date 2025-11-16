import React, { useEffect, useState } from "react";
import { Code2, Lightbulb, Palette, Zap } from "lucide-react";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative  text-white px-6  overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00ffff]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00ffff]/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00ffff]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto w-full space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div
            id="heading1"
            data-animate
            className={`transform transition-all duration-1000 ${
              isVisible.heading1
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <span className="inline-block px-4 py-2 bg-[#00ffff]/10 border border-[#00ffff]/30 rounded-full text-[#00ffff] text-sm font-medium mb-4">
              👋 Get To Know Me
            </span>
            <h3 className="text-5xl font-bold bg-gradient-to-r from-white via-[#00ffff] to-white bg-clip-text text-transparent">
              About Me
            </h3>
          </div>

          <div
            id="heading2"
            data-animate
            className={`transform transition-all duration-1000 delay-200 ${
              isVisible.heading2
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              I'm{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] to-[#00ffff]">
                  Utso Chandro Roy
                </span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00ffff] to-[#00ffff] transform scale-x-0 animate-[scaleX_1s_ease-in-out_forwards]"></span>
              </span>
              , a Passionate Web Developer
            </h2>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 - Journey */}
          <div
            id="card1"
            data-animate
            className={`group transform transition-all duration-1000 ${
              isVisible.card1
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-[#00ffff]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#00ffff]/10 h-full">
              <div className="absolute top-4 right-4 w-12 h-12 bg-[#00ffff]/10 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-[#00ffff]" />
              </div>
              <h4 className="text-xl font-bold text-[#00ffff] mb-4">My Journey</h4>
              <p className="text-gray-300 leading-relaxed">
                My programming journey began with curiosity—wanting to know how
                websites and apps work behind the scenes. Over time, that curiosity
                turned into a passion. I started with HTML & CSS, then moved into
                JavaScript, and eventually mastered the{" "}
                <span className="text-[#00ffff] font-semibold">MERN Stack</span>{" "}
                (MongoDB, Express.js, React, Node.js). I enjoy creating clean,
                functional, and scalable applications that provide real value to users.
              </p>
            </div>
          </div>

          {/* Card 2 - Work Style */}
          <div
            id="card2"
            data-animate
            className={`group transform transition-all duration-1000 delay-200 ${
              isVisible.card2
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-[#00ffff]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#00ffff]/10 h-full">
              <div className="absolute top-4 right-4 w-12 h-12 bg-[#00ffff]/10 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-[#00ffff]" />
              </div>
              <h4 className="text-xl font-bold text-[#00ffff] mb-4">What I Love</h4>
              <p className="text-gray-300 leading-relaxed">
                The type of work I enjoy most is{" "}
                <span className="text-[#00ffff] font-semibold">problem-solving</span>{" "}
                and bringing creative UI/UX designs to life. Whether it's building a
                full-stack web application or crafting smooth user interactions, I
                focus on delivering results that blend performance with aesthetics.
              </p>
            </div>
          </div>

          {/* Card 3 - Hobbies */}
          <div
            id="card3"
            data-animate
            className={`group transform transition-all duration-1000 delay-300 ${
              isVisible.card3
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-[#00ffff]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#00ffff]/10 h-full">
              <div className="absolute top-4 right-4 w-12 h-12 bg-[#00ffff]/10 rounded-lg flex items-center justify-center">
                <Palette className="w-6 h-6 text-[#00ffff]" />
              </div>
              <h4 className="text-xl font-bold text-[#00ffff] mb-4">Beyond Code</h4>
              <p className="text-gray-300 leading-relaxed">
                Outside of programming, I'm a big fan of{" "}
                <span className="text-[#00ffff] font-semibold">
                  photography, music, and exploring nature
                </span>
                . I believe these hobbies not only refresh my mind but also inspire
                my creativity when I return to coding. I'm also a sports
                enthusiast—playing badminton and cricket whenever I get the chance.
              </p>
            </div>
          </div>

          {/* Card 4 - Personality */}
          <div
            id="card4"
            data-animate
            className={`group transform transition-all duration-1000 delay-400 ${
              isVisible.card4
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-[#00ffff]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#00ffff]/10 h-full">
              <div className="absolute top-4 right-4 w-12 h-12 bg-[#00ffff]/10 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#00ffff]" />
              </div>
              <h4 className="text-xl font-bold text-[#00ffff] mb-4">
                Who I Am
              </h4>
              <p className="text-gray-300 leading-relaxed">
                My personality? I'd describe myself as a{" "}
                <span className="text-[#00ffff] font-semibold">
                  curious learner, a problem-solver
                </span>
                , and someone who believes in continuous growth. I love working in
                collaborative environments where ideas flow freely, but I also enjoy
                solo deep-focus coding sessions where I can get into the "flow"
                state.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div
          id="decoration"
          data-animate
          className={`flex justify-center gap-2 pt-8 transform transition-all duration-1000 delay-500 ${
            isVisible.decoration ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          <div className="w-2 h-2 bg-[#00ffff] rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-[#00ffff] rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-[#00ffff] rounded-full animate-bounce delay-200"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scaleX {
          to {
            transform: scaleX(1);
          }
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </section>
  );
};

export default AboutMe;