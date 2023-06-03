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
      <div className="formulario-login">
        <h1> Iniciar Session :</h1>

        <br />
        <form className="form-login" onSubmit={handleSubmit(onSubmitLogin)}>
          <label htmlFor="nombre">Email : </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="introduzca su e-mail"
            {...register(
              "email",
              { required: true, message: "Requerido" },
              {
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Ingresa un email válido",
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
            placeholder="su contraseña"
            {...register(
              "password",
              // {
              //   pattern:
              //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\!\#\@\$\%\&\/\(\)\=\?\*\-\+\-\_\.\:\;\,\]\[\{\}\^])[A-Za-z\d\!\#\@\$\%\&\/\(\)\=\?\*\-\+\-\_\.\:\;\,\]\[\{\}\^]{8,}$/,
              //   message:
              //     "La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula, un número y un caracter especial permitido: ! # @ $ % & / ( ) = ? * - + _ . : ; , ] [ { } ^",
              // },
              { required: true, message: "Requerido" }
            )}
          />
          {errors.password && errors.password.type === "required" && (
            <span> Required</span>
          )}
          {/* {errors.password && errors.password.type === "pattern" && (
            <span>
              La contraseña debe tener al menos 8 caracteres, incluyendo una
              letra mayúscula, una letra minúscula, un número y un caracter
              especial
            </span>
          )} */}

          <br />
          <button className="form-enviar" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
