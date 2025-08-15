import React from "react";
import Section1 from "../Components/AllHomeSection/section1";
import AboutMe from "../Components/AllHomeSection/AboutMe";
import Skill from "../Components/AllHomeSection/Skill";
import Projects from "./Projects";
import Learning from "./Learning";
const Home = () => {
  return (
    <div className="text-white px-6 space-y-4">
          <section >
              <Section1></Section1>
          </section>
          
          <section>
              <AboutMe></AboutMe>
          </section>
          <section>
              <Skill></Skill>
          </section>
          <section>
              <Projects></Projects>
          </section>
          <section>
              <Learning></Learning>
          </section>
    </div>
  );
};

export default Home;
