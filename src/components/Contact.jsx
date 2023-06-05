import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onContact = (data) => {
    console.log(data);
  };

  return (
    <div className="contact-form">
      <div className="contact">
        <h1>Contact with us </h1>
        <p>We will answer all your questions and queries</p>
        <br />

        <div className="contact-inputs">
          <form onSubmit={handleSubmit(onContact)}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              {...register("name", { minLength: 4, required: true })}
            />
            {errors.name && errors.name.type === "required" && <p>Required</p>}
            {errors.name && errors.name.type === "minLength" && (
              <p>Minimum 4 characters</p>
            )}
            <br />

            <input
              type="text"
              name="surname"
              id="surname"
              placeholder="Surname"
              {...register("surname", { minLength: 4, required: true })}
            />
            {errors.surname && errors.surname.type === "required" && (
              <p className="fallo">Required</p>
            )}
            {errors.surname && errors.surname.type === "minLength" && (
              <p className="fallo">Minimum 4 characters</p>
            )}

            <br />

            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
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

            <input
              type="tel"
              name="tel"
              id="tel"
              placeholder="Telephone contact"
            />
            <br />
            <label htmlFor="">
              <select name="hospital" id="hospital" className="options">
                <option>Which centre do you want to contact ? </option>
                <option> Gran Canaria </option>
                <option> Tenerife </option>
              </select>
            </label>
            <br />
            <br />
            <textarea
              name="info"
              id="info"
              cols="30"
              rows="10"
              placeholder="Enquiry"
              className="enquiry"
            ></textarea>
            <br />
            <input type="checkbox" name="policy" id="policy" />
            <label htmlFor="policy" className="privacy">
              I have read and accept the Privacy Policy
            </label>
            <br />
            <button className="contact-send">Send message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
