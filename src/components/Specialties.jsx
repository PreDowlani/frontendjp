import React from "react";

const Specialties = () => {
  return (
    <div className="specialties">
      <div className="specialties-img"></div>
      <div className="specialties-p">
        <h2>Our Specialties</h2>
        <p>
          At Canary Hospitals, we offer a wide range of specialized medical
          services to cater to our patients' unique healthcare needs. Our team
          of expert physicians and specialists are dedicated to delivering
          exceptional care in the following areas:
        </p>
        <br />
        <ul>
          <li>
            {" "}
            <h4>Dermatology : </h4> <p> Skin, hair, and nail care.</p>
          </li>
          <li>
            {" "}
            <h4>Ophthalmology : </h4>
            <p>Eye health and vision care.</p>
          </li>
          <li>
            {" "}
            <h4>Pediatrics : </h4>
            <p> Medical care for children.</p>
          </li>
          <li>
            {" "}
            <h4>Cardiology : </h4>
            <p> Heart health and cardiovascular care.</p>
          </li>
          <li>
            {" "}
            <h4>Orthopedics : </h4>
            <p> Musculoskeletal health and bone care.</p>
          </li>
        </ul>
        <br />
        <p>
          Whether you require a routine check-up or advanced treatment, our
          specialists are here to provide you with the highest level of medical
          expertise and compassionate care.
        </p>
      </div>
    </div>
  );
};

export default Specialties;
