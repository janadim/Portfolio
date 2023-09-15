import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <h1>Esto es el titpulo del Nav</h1> */}
      <div className="links">
        <Link to="/" className="links__home">
          Home
        </Link>
        <Link to="/workexperience" className="links__workexperience">
          Work Experience
        </Link>
        <Link to="/education" className="links__education">
          Education
        </Link>
        <Link to="/projects" className="links__projects">
          Projects
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
