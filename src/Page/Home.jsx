import React from "react";
import Section1 from "../Components/AllHomeSection/section1";
import AboutMe from "../Components/AllHomeSection/AboutMe";
import Skill from "../Components/AllHomeSection/Skill";
import Projects from "./Projects";
import Learning from "./Learning";
import Contact from "./Contact";
const Home = () => {
  return (
    <div className="text-white  space-y-4">
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
          <section>
              <Contact></Contact>
          </section>
    </div>
  );
};

export default Home;
