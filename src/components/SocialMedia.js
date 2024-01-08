import React from "react";

function SocialMedia() {
  return (
    <div>
      <nav className="sm">
        <ul className="sm__list">
          <li className="sm__link--animation">
            <a
              className="sm__link"
              href="https://github.com/janadim"
              target="_blank"
              alt="github"
            >
              <i className="sm__link--icon fab fa-github-alt"></i>
            </a>
          </li>
          <li>
            <a
              className="sm__link"
              href="https://www.linkedin.com/in/janadtitarchuk/"
              target="_blank"
              alt="linkedin"
            >
              <i className="sm__link--icon fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a
              className="sm__link"
              href={`mailto:jana.d.titarchuk@gmail.com`}
              target="_blank"
              alt="email"
            >
              <i className="sm__link--icon fas fa-envelope"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default SocialMedia;
