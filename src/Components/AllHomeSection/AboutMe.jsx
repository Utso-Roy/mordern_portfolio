import React from "react";
const AboutMe = () => {
  return (
    <section id="about-section" className="text-white ">
      <div className="mx-auto  space-y-6">
        {/* Heading */}
        <h3 className="text-5xl text-center font-semibold text-[#00ffff]">
          About Me
        </h3>
        <h2 className="text-4xl text-center font-bold leading-tight">
          I'm <span className="text-[#00ffff]">Utso Chandro Roy</span>, a
          Passionate Web Developer
        </h2>

        {/* Paragraphs */}
        <div>
          <p className="text-gray-300 leading-relaxed">
            My programming journey began with curiosity—wanting to know how
            websites and apps work behind the scenes. Over time, that curiosity
            turned into a passion. I started with HTML & CSS, then moved into
            JavaScript, and eventually mastered the MERN Stack (MongoDB,
            Express.js, React, Node.js). I enjoy creating clean, functional, and
            scalable applications that provide real value to users.
          </p>
        </div>
        <p className="text-gray-300 leading-relaxed">
          The type of work I enjoy most is problem-solving and bringing creative
          UI/UX designs to life. Whether it's building a full-stack web
          application or crafting smooth user interactions, I focus on
          delivering results that blend performance with aesthetics.
        </p>

        <p className="text-gray-300 leading-relaxed">
          Outside of programming, I’m a big fan of photography, music, and
          exploring nature. I believe these hobbies not only refresh my mind but
          also inspire my creativity when I return to coding. I’m also a sports
          enthusiast—playing badminton and cricket whenever I get the chance.
        </p>

        <p className="text-gray-300 leading-relaxed">
          My personality? I’d describe myself as a curious learner, a
          problem-solver, and someone who believes in continuous growth. I love
          working in collaborative environments where ideas flow freely, but I
          also enjoy solo deep-focus coding sessions where I can get into the
          “flow” state.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
