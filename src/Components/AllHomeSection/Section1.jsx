import React, { useEffect } from "react";
import PixelTransition from "../../PixelTransition/PixelTransition";
import Aos from "aos";
import BlurText from "../../BlurText/BlurText";
const Section1 = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className=" text-white ">
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className=" w-full flex flex-col lg:flex-row-reverse items-center gap-10">
          <div data-aos="fade-left" className="w-full  lg:w-1/3">
            <PixelTransition
              firstContent={
                <img
                  src="https://i.ibb.co.com/0Vj8BjTD/Whats-App-Image-2025-08-13-at-6-23-16-PM.jpg"
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

            <p className="py-4 text-gray-300">
              I am a passionate MERN Stack Developer skilled in building
              full-stack, responsive, <br /> and user-friendly web applications.
            </p>

            <button className="btn btn-outline border-[#00ffff] text-white hover:bg-[#00ffff] hover:text-gray-900">
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
