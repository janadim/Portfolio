const Education = () => {
  return (
    <div className="education">
      <h1 className="education__title">Education</h1>
      <h3 className="education__subtitle">
        Adalab (Madrid) | Mar 2021 - Aug 2021
      </h3>
      <p className="education__text--1">
        Intensive Bootcamp in Front-end Development, Software Development.
      </p>

      <div className="education__text--2">
        Front-end Development || Back-end basics
        <ul className="education__text--2-duties">
          <li>
            Layout: HTML5, CSS3, Flexbox, CSS Grid, responsive design, SASS,
            animations, Layout Components and BEM method.
          </li>
          <li>Web development frameworks: Bootstrap.</li>
          <li>SPAs using JavaScript and React.</li>
          <li>
            Third party APIs web service and back-end programming: NodeJS,
            Express and SQLite.
          </li>
          <li>Version Control with Git.</li>
          <li>Experience developing projects using Agile and SCRUM.</li>
          <li>
            Development tools: Gulp, Visual Studio Code, Terminal, Zeplin.
          </li>
          <li>Communication and teamwork tools: Slack, GitHub.</li>
        </ul>
      </div>
    </div>
  );
};
export default Education;
