import React from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="contenedor-signup">
      <div className="form-alta">
        <h1>Formulario para Darse de Alta :</h1>
        <br />
        <div className="inputs">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="nombre">Nombre : </label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Nombre"
              {...register("nombre", { minLength: 4, required: true })}
            />
            {errors.nombre && errors.nombre.type === "required" && (
              <p>Campo Requerido</p>
            )}
            {errors.nombre && errors.nombre.type === "minLength" && (
              <p>Debe tener minimo 4 caracteres</p>
            )}
            <br />
            <label htmlFor="apellidos">Apellidos : </label>
            <input
              type="text"
              name="apellidos"
              id="apellidos"
              placeholder="apellidos"
              {...register("apellidos", { minLength: 4, required: true })}
            />
            {errors.apellidos && errors.apellidos.type === "required" && (
              <p className="fallo">Campo Requerido</p>
            )}
            {errors.apellidos && errors.apellidos.type === "minLength" && (
              <p className="fallo">Debe tener minimo 4 caracteres</p>
            )}
            <br />
            <label htmlFor="edad">Edad : </label>
            <input
              type="number"
              name="edad"
              id="edad"
              placeholder="edad"
              {...register("edad", { min: 18, required: true })}
            />
            {errors.edad && errors.edad.type === "required" && (
              <p className="fallo">Campo Requerido</p>
            )}
            {errors.edad && errors.edad.type === "min" && (
              <p className="fallo">Debe tener minimo 18 años</p>
            )}
            <br />
            <label htmlFor="telef">Telefono : </label>
            <input
              type="tel"
              name="telfono"
              id="telefono"
              placeholder="su telefono"
              {...register("telefono", { required: true })}
            />
            {errors.telefono && errors.telefono.type === "required" && (
              <p className="fallo">Campo Requerido</p>
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
              <p className="fallo">Campo Requerido</p>
            )}
            {errors.email && errors.email.type === "password" && (
              <p className="fallo">Debe tener un email válido</p>
            )}
            <br />
            <label htmlFor="password">Contraseña: </label>
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
              <p className="fallo">Campo Requerido</p>
            )}
            {errors.password && errors.password.type === "pattern" && (
              <p className="fallo">
                La contraseña debe tener al menos 8 caracteres, incluyendo una
                letra mayúscula, una letra minúscula, un número y un caracter
                especial.
              </p>
            )}
            <br />
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
