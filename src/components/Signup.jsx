import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await axios
      .post("http://localhost:5000/api/users/", {
        name: data.name,
        surname: data.surname,
        email: data.email,
        password: data.password,
        rol: data.rol,
      })
      .then((response) => {
        console.log("Formed filled ! Ok ! ", response.data);
      })
      .catch((error) => {
        console.log(`Problems creating the form ${error.data}`);
      });
  };

  return (
    <div className="contenedor-signup">
      <div className="form-alta">
        <h1>Online Register Form :</h1>
        <br />
        <div className="inputs">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="nombre">Name : </label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Nombre"
              {...register("name", { minLength: 4, required: true })}
            />
            {errors.nombre && errors.nombre.type === "required" && (
              <p>Required</p>
            )}
            {errors.nombre && errors.nombre.type === "minLength" && (
              <p>Minimum 4 characters</p>
            )}
            <br />
            <label htmlFor="apellidos">Surname : </label>
            <input
              type="text"
              name="apellidos"
              id="apellidos"
              placeholder="apellidos"
              {...register("surname", { minLength: 4, required: true })}
            />
            {errors.apellidos && errors.apellidos.type === "required" && (
              <p className="fallo">Required</p>
            )}
            {errors.apellidos && errors.apellidos.type === "minLength" && (
              <p className="fallo">Minimum 4 characters</p>
            )}

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
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              {...register(
                "password",
                {
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\!\#\@\$\%\&\/\(\)\=\?\*\-\+\-\_\.\:\;\,\]\[\{\}\^])[A-Za-z\d\!\#\@\$\%\&\/\(\)\=\?\*\-\+\-\_\.\:\;\,\]\[\{\}\^]{8,}$/,
                  message:
                    "La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula, un número y un caracter especial permitido: ! # @ $ % & / ( ) = ? * - + _ . : ; , ] [ { } ^",
                },

                { required: true }
              )}
            />
            {errors.password && errors.password.type === "required" && (
              <p className="fallo">Required</p>
            )}
            {errors.password && errors.password.type === "pattern" && (
              <p className="fallo">
                Password must be at least 8 characters, including a uppercase
                letter, a lowercase letter, a number, and a character special.
              </p>
            )}
            <br />
            <label htmlFor="rol">Your Rol :</label>
            <input
              type="text"
              name="rol"
              id="rol"
              defaultValue="pacient"
              {...register("rol", { required: true })}
            />
            <div>
              <input
                className="form-enviar"
                type="submit"
                value="Crear"
                id="submit"
              />
            </div>
          </form>
        </div>
        {/* <div className="alta">
          <h2>
            Ya tienes cuenta con nosotros
            <Link to={"/login"} className="pulse">
              Pulse aqui
            </Link>
          </h2>
        </div> */}
      </div>
    </div>
  );
};

export default Signup;
