import React from "react";
import { Link } from "react-router-dom";

const FooterNavbar = () => {
  return (
    <div className="footer-navbar">
      <div className="contact-navbar">
        <h3>© Canary Hospitals</h3>
        <a href="tel:+34928112233">
          APPOINTMENT: GRAN CANARIA 928112233 --
          <a href="tel:+34922445566"> TENERIFE 922445566</a>
        </a>
        <div className="book-app">
          <p>
            <Link to={"/appointments"}>Online Appointment</Link>
          </p>
        </div>
      </div>
      <div className="rights">
        <a href="#">Política de Privacidad</a>
        <a href="#">Política de Cookies</a>
        <a href="#">Our Hospitals</a>
        <a href="#">Work with Us</a>
        <Link to={"/contact"} className="link-contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default FooterNavbar;
