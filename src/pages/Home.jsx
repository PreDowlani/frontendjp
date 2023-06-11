import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Canary Hospitals</h1>
      <p>Providing exceptional healthcare services since 1990.</p>
      <button className="home-btn">
        <Link className="home-link" to={"/appointments"}>
          Book an Appointment
        </Link>{" "}
      </button>
    </div>
  );
};

export default Home;
