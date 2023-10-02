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

      <h3 className="workexperience__subtitle--2">
        Technician at Prodrive Technologies (Eindhoven) | Jan 2019 - Sep 2020
      </h3>
      {/* <p className="workexperience__text--3">- - - - - -</p> */}

      <div className="workexperience__text--2">
        <p>Working in the Cable Harness Manufacturing department:</p>

        <ul className="workexperience__text--2-duties">
          <li>
            Trainings and experience in industrial machinery e.g. Cable Harness
            testing, Komax BT contact applicators, Powerstrip, etc.
          </li>
          <li>Experience in cable assembly, preparation and connecting.</li>
          <li>
            Knowledge of basic electrical measurement tools e.g. Multimeter.
          </li>
        </ul>
        <p className="workexperience__text--3">
          Working in the Logistics department:
        </p>
        <ul className="workexperience__text--2-duties">
          <li>Working in goods receipt and booking.</li>
          <li>Experience with LEA and SAP software tools.</li>
          <li>Detecting and finding solutions for logistic problems.</li>
        </ul>
      </div>
    </div>
  );
};
export default WorkExperience;
