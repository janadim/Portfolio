import React from "react";

//images
import boots from "../images/boots.png";
import code from "../images/code.png";
import css from "../images/css.png";
import git from "../images/git.png";
import github from "../images/github.png";
import gulp from "../images/gulp.png";
import html from "../images/html.png";
import restapi from "../images/restapi.png";
import js from "../images/js.png";
import ts from "../images/ts.png";
import phpstorm from "../images/phpstorm.png";
import npm from "../images/npm.png";
import ps from "../images/ps.png";
import react from "../images/react.png";
import sass from "../images/sass.png";
import figma from "../images/figma.png";
import slack from "../images/slack.png";
import teams from "../images/teams.png";
import trello from "../images/trello.png";
import mysql from "../images/mysql.png";
import zeplin from "../images/zeplin.png";
import nodejs from "../images/nodejs.png";

const TechStack = () => {
  return (
    <section className="techstack">
      <h2 className="techstack__title">Tech Stack</h2>
      <article className="skills">
        <h4 className="skills__title">Technologies</h4>
        <ul className="skills__container">
          <li className="skills__list">
            <img
              className="skills__image"
              alt="HTML5"
              src={html}
              title="HTML5"
            />
          </li>
          <li className="skills__list">
            <img className="skills__image" alt="CSS3" src={css} />
          </li>
          <li className="skills__list">
            <img
              className="skills__image"
              alt="JavaScript"
              src={js}
              title="JavaScript"
            />
          </li>
          <li className="skills__list">
            <img
              className="skills__image"
              alt="TypeScript"
              src={ts}
              title="TypeScript"
            />
          </li>
          <li className="skills__list">
            <img
              className="skills__image"
              src={react}
              alt="react"
              title="React"
            />
          </li>
          <li className="skills__list">
            <img className="skills__image" alt="Gulp" src={gulp} title="Gulp" />
          </li>
          <li className="skills__list">
            <img className="skills__image" alt="Git" src={git} title="Git" />
          </li>
          <li className="skills__list">
            <img
              className="skills__image"
              alt="mysql"
              src={mysql}
              title="MySQL"
            />
          </li>
          <li className="skills__list">
            <img
              className="skills__image"
              alt="Bootstrap"
              src={boots}
              title="Bootstrap"
            />
          </li>
          <li className="skills__list">
            <img
              className="skills__image"
              alt="restapi"
              src={restapi}
              title="RESTfull APIs integration"
            />
          </li>
          <li className="skills__list">
            <img className="skills__image" alt="Sass" src={sass} title="Sass" />
          </li>
          <li className="skills__list">
            <img
              className="skills__image"
              src={nodejs}
              alt="nodejs"
              title="Node.js"
            />
          </li>
        </ul>
      </article>
      <article className="skills">
        <h3 className="skills__title">Tools</h3>
        <ul className="skills__container">
          <li className="skills__list">
            <img
              className="skills__image"
              alt="Github"
              src={github}
              title="Github"
            />
          </li>
          <li className="skills__list">
            <img className="skills__image" alt="Npm" src={npm} title="Npm" />
          </li>
          <li className="skills__list">
            <img
              className="skills__image"
              alt="Visual Studio Code"
              src={code}
              title="Visual Studio Code"
            />
          </li>
          <li className="skills__list">
            <img
              className="skills__image"
              alt="phpstorm"
              src={phpstorm}
              title="PhpStorm"
            />
          </li>
          <li className="skills__list">
            <img
              className="skills__image"
              alt="Zeplin"
              src={zeplin}
              title="Zeplin"
            />
          </li>
          <li className="skills__list">
            <img
              className="skills__image"
              alt="Photoshop"
              src={ps}
              title="Photoshop"
            />
          </li>
          <li className="skills__list">
            <img
              className="skills__image"
              alt="Figma"
              src={figma}
              title="Figma"
            />
          </li>
          <li className="skills__list">
            <img
              className="skills__image"
              alt="Trello"
              src={trello}
              title="Trello"
            />
          </li>
          <li className="skills__list">
            <img
              className="skills__image"
              alt="Slack"
              src={slack}
              title="Slack"
            />
          </li>
          <li className="skills__list">
            <img
              className="skills__image"
              alt="Teams"
              src={teams}
              title="Teams"
            />
          </li>
        </ul>
      </article>
    </section>
  );
};

export default TechStack;
