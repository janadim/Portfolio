import React from "react";

// import Landing from "./Landing";
import AboutMe from "./AboutMe";
import Introduction from "./Introduction";
import TechStack from "./TechStack";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Education from "./Education";

function Main() {
  return (
    <div className="main">
      <Introduction />
      <AboutMe />
      <TechStack />
      <WorkExperience />
      <Education />
      <Projects />
    </div>
  );
}

export default Main;
