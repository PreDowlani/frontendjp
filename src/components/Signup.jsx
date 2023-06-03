import React from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handelSubmit,
    formState: { errors },
  } = useForm();

  const formGestor = (info) => {
    console.log(info);
  };

  return (
    <div className="signup-container">
      <h1>Register Here </h1>
      <br />
      <div className="register">
        <form onSubmit={formGestor}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            {...register("name", { minLength: 4, required: true })}
          />
          {errors.name && errors.name.type === "required" && <h4>Required</h4>}
          {errors.name && errors.name.type === "minLength" && (
            <h4>Must be at least 4 characters</h4>
          )}
          <br />
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            name="surname"
            id="surname"
            placeholder="Your surname"
            {...register("surname", { minLength: 4, required: true })}
          />
          {errors.surname && errors.surname.type === "required" && (
            <h4>Required</h4>
          )}
          {errors.surname && errors.surname.type === "minLength" && (
            <h4>Must be at least 4 characters</h4>
          )}
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            {...register(
              "email",
              { required: true },
              {
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email",
              }
            )}
          />
          {errors.email && errors.email.type === "required" && (
            <h4>Required</h4>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <h4>Must be at least 4 characters</h4>
          )}
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Your password"
            {...register(
              "password",
              { required: true },
              {
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\!\#\@\$\%\&\/\(\)\=\?\*\-\+\-\_\.\:\;\,\]\[\{\}\^])[A-Za-z\d\!\#\@\$\%\&\/\(\)\=\?\*\-\+\-\_\.\:\;\,\]\[\{\}\^]{8,}$/,
                message:
                  "Password must be at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one allowed special character",
              }
            )}
          />
          {errors.password && errors.password.type === "required" && (
            <h4>Required</h4>
          )}
          {errors.password && errors.password.type === "pattern" && (
            <h4>
              MPassword must be at least 8 characters, including one uppercase
              letter, one lowercase letter, one number, and one allowed special
              character
            </h4>
          )}
          <br />
          <label htmlFor="rol">Select your Rol :</label>
          <select name="rol" id="rol">
            <option value="pacient">Pacient</option>
            <option value="doctor">Doctor</option>
            <option value="other">Other</option>
          </select>
          <br />
          <div className="input-submit">
            <input type="submit" value="submit" id="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
