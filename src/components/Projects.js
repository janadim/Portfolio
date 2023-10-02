import Project from "./Project";
import React from "react";

import { Link } from "react-router-dom";

import data from "../data/projects.json";

function Projects() {
  const projects = data.map((project) => {
    return (
      <li key={project.id}>
        <Project
          name={project.name}
          description={project.tools}
          web={project.web}
          repo={project.git}
          img={project.img}
        />
      </li>
    );
  });

  const index = projects.slice(0, 5);

  return (
    <section>
      <h2 className="projects__title">Projects</h2>
      <ul className="proyectos">{index}</ul>
    </section>
  );
}
export default Projects;
