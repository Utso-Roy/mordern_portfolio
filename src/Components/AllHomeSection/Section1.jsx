import React, { useEffect } from "react";
import PixelTransition from "../../PixelTransition/PixelTransition";
import Aos from "aos";
import BlurText from "../../BlurText/BlurText";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
const Section1 = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className=" text-white  px-6">
      <div className="min-h-screen flex items-center justify-center ">
        <div className=" w-full flex flex-col lg:flex-row-reverse items-center gap-10">
          <div data-aos="fade-left" className="w-full  lg:w-1/3">
            <PixelTransition
              firstContent={
                <img
                  src="https://i.ibb.co.com/LzkZ6J2X/Whats-App-Image-2025-08-16-at-12-40-12-AM.jpg"
                  alt="utso roy"
                  className="w-full h-full object-cover rounded-lg"
                />
              }
              secondContent={
                <div className="w-full h-full grid place-items-center bg-gray-800 rounded-lg">
                  <p className="font-extrabold text-4xl lg:text-5xl text-white">
                    Utso Roy
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
          </div>

          {/* Left Side: Text */}
          <div data-aos="fade-right" className="w-full  space-y-4">
            <h3 className="text-lg">Hi, My name is</h3>
            <div>
              <BlurText
                text="Utso Chandro Roy"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-4xl md:text-5xl text-[#00ffff] font-bold"
              />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold">
              I build things for the web.
            </h1>

            <p className=" text-gray-300">
              I am a passionate MERN Stack Developer skilled in building
              full-stack, responsive, <br /> and user-friendly web applications.
            </p>
            <div>

               <div className="flex gap-5 ">
                        <a
                          href="https://linkedin.com/in/utsoroy8876"
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-[#00ffff] transition-transform transform hover:scale-110"
                        >
                          <FaLinkedin className="text-2xl" />
                        </a>
                        <a
                          href="https://github.com/utso-roy"
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-[#00ffff] transition-transform transform hover:scale-110"
                        >
                          <FaGithub className="text-2xl" />
                        </a>
                        <a
                          href="https://facebook.com"
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-[#00ffff] transition-transform transform hover:scale-110"
                        >
                          <FaFacebookSquare className="text-2xl" />
                        </a>
                      </div>
            </div>

            <button className="btn btn-outline border-[#00ffff] text-white hover:bg-[#00ffff] backdrop-blur-2xl   bg-white/5 hover:text-gray-900">
              Resume Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
