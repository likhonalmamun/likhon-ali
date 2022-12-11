import React from "react";
import AboutMe from "../../Components/AboutMe";
import Contact from "../../Components/Contact";
import Intro from "../../Components/Intro";
import MySkills from "../../Components/MySkills";
import Projects from "../../Components/Projects";

const Home = () => {
  return (
    <div>
      <Intro></Intro>
      <AboutMe></AboutMe>
      {/* <MySkills></MySkills> */}
      <Projects></Projects>
      <Contact></Contact>
      {/* <ProjectDetails></ProjectDetails> */}
    </div>
  );
};

export default Home;
