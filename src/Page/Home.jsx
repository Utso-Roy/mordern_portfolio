import React from "react";
import Section1 from "../Components/AllHomeSection/section1";
import AboutMe from "../Components/AllHomeSection/AboutMe";
import Skill from "../Components/AllHomeSection/Skill";
const Home = () => {
  return (
    <div className="text-white">
          <section>
              <Section1></Section1>
          </section>
          
          <section>
              <AboutMe></AboutMe>
          </section>
          <section>
              <Skill></Skill>
          </section>
    </div>
  );
};

export default Home;
