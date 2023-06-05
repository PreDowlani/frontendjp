import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitLogin = async (data) => {
    await axios
      .post("http://localhost:5000/api/login", {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        console.log(`Login Successful`);
        localStorage.setItem(
          "doctorsData",
          JSON.stringify({
            userId: response.data.userId,
            token: response.data.token,
          })
        );
      })
      .catch((error) => {
        console.log(`Failed Communication ${error.data}`);
      });
  };

  return (
    <div className="contenedor-login">
      <div className="form-login">
        <h1> Log in : </h1>
        <br />
        <div className="inputs-login">
          <form onSubmit={handleSubmit(onSubmitLogin)}>
            <label htmlFor="nombre">Email : </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="enter you'r e-mail"
              {...register(
                "email",
                { required: true, message: "Required" },
                {
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Enter a valid e-mail",
                }
              )}
            />
            {errors.email && errors.email.type === "required" && (
              <span> Plese enter a valid email</span>
            )}
            <br />
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="you'r password"
              {...register("password", { required: true, message: "Required" })}
            />
            {errors.password && errors.password.type === "required" && (
              <span> Required</span>
            )}
            <br />
            <button className="btn-login" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
