import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">MedCare Plus</div>
      <ul className="navbar-links">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/doctors"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Doctors
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/booking"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Book Appointment
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;