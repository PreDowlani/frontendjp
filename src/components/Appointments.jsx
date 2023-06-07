import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";

const Appointments = () => {
  const [registerd, setRegisterd] = useState(true);

  const handelRegisterd = () => {
    setRegisterd(!registerd);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const reservApointment = (data) => {
    console.log(data);
  };

  const mostrarDoctor = async (data) => {
    await axios
      .get("http://localhost:5000/api/doctors/")
      .then((response) => {
        console.log(`Todos los doctores` + response.data.showDoctors);
      })
      .catch((error) => {
        console.log(`no docotr ${error.data}`);
      });
  };
  mostrarDoctor();

  //   {doctor,date,time,active,comments}
  return (
    <div className="appointments">
      <div className="appoitnment-form">
        <h1>Appointment - Form : </h1>
        <br />
        <div className="app-form">
          <form onSubmit={handleSubmit(reservApointment)}>
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
              {/* {data.map((doctor)=>{
                return (
                  
                  <option value="doctor">{doctor}</option>
                )
              })} */}
              {/* <option value="2">Doctor2</option>
              <option value="3">Doctor3</option>
              <option value="4">Doctor4</option>
              <option value="5">Doctor5</option> */}
            </select>
            <br />
            <label htmlFor="date">Date : </label>
            <input type="date" name="date" id="date" />
            <br />
            <label htmlFor="time">Choose a Time : </label>
            <select name="time" id="time" className="select-time">
              <option value="09:30">09:30</option>
              <option value="10:00">10:00</option>
              <option value="10:30">10:30</option>
              <option value="11:00">11:00</option>
              <option value="11:30">11:30</option>
              <option value="12:00">12:00</option>
              <option value="12:30">12:30</option>
              <option value="13:00">13:00</option>
              <option value="13:30">13:30</option>
              <option value="14:00">14:00</option>
              <option value="14:30">14:30</option>
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
