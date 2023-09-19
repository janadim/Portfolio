import React from "react";

import AboutMe from "./AboutMe";
import Introduction from "./Introduction";
import TechStack from "./TechStack";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";

function Main() {
  return (
    <div className="main">
      <Introduction />
      <AboutMe />
      <TechStack />
      <WorkExperience />
      <Projects />
    </div>
  );
}

export default Main;
