import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";

const Appointments = () => {
  const [medicos, setMedicos] = useState([]);
  const [doctorTimings, setDoctorTimings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/doctors/", {})
      .then((response) => {
        console.log(response.data.medicos);
        setMedicos(response.data.medicos);
        const timings = response.data.medicos.map((doc) => doc.time);
        setDoctorTimings(timings);
      })
      .catch((error) => {
        console.log(`no docotr ${error.data}`);
      });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   {doctor,date,time,active,comments}
  return (
    <div className="appointments">
      <div className="appoitnment-form">
        <h1>Appointment - Form : </h1>
        <br />
        <div className="app-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              {...register("name", { required: true })}
            />
            {errors.name && errors.name.type === "required" && <p>Required</p>}
            <br />
            <label htmlFor="email">E-mail : </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="e-mail"
              {...register(
                "email",
                { required: true },
                {
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Ingresa un email válido",
                }
              )}
            />
            {errors.email && errors.email.type === "required" && (
              <p className="fallo">Required</p>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <p className="fallo">Please enter a valid email</p>
            )}
            <br />

            <label htmlFor="doctor">Choose a Specialist : </label>

            <select name="specialist" id="specialist" className="select-time">
              {medicos.map((doctors) => {
                return <option value="doctor">{doctors.name}</option>;
              })}
            </select>
            <br />
            <label htmlFor="date">Date : </label>
            <input type="date" name="date" id="date" />
            <br />
            <label htmlFor="time">Choose a Time : </label>
            <select name="time" id="time" className="select-time">
              {console.log(doctorTimings)}
              {doctorTimings.map((timing) => {
                return (
                  <option key={timing} value={timing}>
                    {timing}
                  </option>
                );
              })}
            </select>
            <br />
            <textarea
              name="comments"
              id="comments"
              cols="30"
              rows="10"
              placeholder="Anything you would like the Doctor to know... "
            ></textarea>
            <br />
            <input type="submit" value="Submit" className="app-submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
