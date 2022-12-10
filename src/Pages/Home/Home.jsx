import React from "react";
import AboutMe from "../../Components/AboutMe";
import Contact from "../../Components/Contact";
import Intro from "../../Components/Intro";
import MySkills from "../../Components/MySkills";

const Home = () => {
  return (
    <div>
      <Intro></Intro>
      <AboutMe></AboutMe>
      {/* <MySkills></MySkills> */}
      <Contact></Contact>
    </div>
  );
};

export default Home;
