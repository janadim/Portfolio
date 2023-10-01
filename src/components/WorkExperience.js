const WorkExperience = () => {
  return (
    <div className="workexperience">
      <h1 className="workexperience__title">Work Experience</h1>
      <h3 className="workexperience__subtitle">
        Frontend Developer at Content Stadium (Amsterdam) | Oct 2021 - May 2023
      </h3>
      <p className="workexperience__text--1">
        Creating flexible, versatile and customizable templates for sports
        industry clients. Converting and implementing digital designs into web
        assets.
      </p>

      <div className="workexperience__text--2">
        Apart from building the final product, some of my responsibilities were:
        <ul className="workexperience__text--2-duties">
          <li>
            Joining calls with clients to give technical input about a new
            product.
          </li>
          <li>Deploying final products to the platform.</li>
          <li>
            Testing templates and giving technical and UI/UX feedback to other
            team members.
          </li>
          <li>
            Helping new colleagues with the onboarding process and giving them
            support.
          </li>
          <li>Creating documentation for dev department.</li>
          <li>
            Taking over the stand-up meetings during scrum master’s absence.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default WorkExperience;
