import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav>
        <ul>
          <li className="hosp-logo">
            <NavLink to={"/"}>
              <img src={logo} alt="logo" height="90rem" />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/aboutus"} className="navlinks">
              Aboutus
            </NavLink>
          </li>
          <li>
            <NavLink to={"/specialties"} className="navlinks">
              Specialties
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} className="navlinks">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to={"/login"} className="navlinks">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to={"/signup"} className="navlinks">
              Signup
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
