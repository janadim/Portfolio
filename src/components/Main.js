import React from "react";

import AboutMe from "./AboutMe";
import Introduction from "./Introduction";
import TechStack from "./TechStack";
// import Proyectos from "./Proyectos";
// import Habilidades from "./Habilidades";
// import SobreMi from "./SobreMi";

function Main() {
  return (
    <div className="main">
      <Introduction />
      <AboutMe />
      <TechStack />
    </div>
  );
}

export default Main;
