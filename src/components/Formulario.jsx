import React, { useState } from "react";

// DECLARACION DE ESTADOS Y PROPS
const Formulario = ({ setAppAlertMessage, setAppAlertType }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // FUNCION QUE EVITA LA CARGA PREDETERMINADA DE LA PAGINA AL SUBMIT
  const validarDatos = (e) => {
    e.preventDefault();
    let message = "";
    let type = "";

    // CONDICIONES PARA MOSTRAR ERROR, EXITO Y O FALTA DE DATOS REGISTRO
    if (
      nombre === "" ||
      email === "" ||
      password === "" ||
      passwordConfirm === ""
    ) {
      message = "Debes completar todos los campos requeridos";
      type = "danger";
    } else if (password !== passwordConfirm) {
      message = "Las contraseñas no coinciden";
      type = "danger";
    } else {
      message = "¡Registro exitoso!";
      type = "success";

      // RESETEO DE INPUTS
      setNombre("");
      setEmail("");
      setPassword("");
      setPasswordConfirm("");
    }

    setAppAlertMessage(message);
    setAppAlertType(type);
  };

  // FORMULARIOS
  return (
    <>
      {/* FORMULARIO NOMBRE */}
      <form className="formulario" onSubmit={validarDatos}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Nombre"
            name="nombre"
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>

        {/* FORMULARIO CORREO */}

        <div className="form-group">
          <input
            type="email"
            placeholder="tuemail@ejemplo.com"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        {/* FORMULARIO PASSWORD */}

        <div className="form-group">
          <input
            type="password"
            placeholder="Contraseña"
            name="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        {/* FORMULARIO PASSWORD-CONFIRM */}

        <div className="form-group">
          <input
            type="password"
            placeholder="Confirma tu contraseña"
            name="passwordConfirm"
            className="form-control"
            onChange={(e) => setPasswordConfirm(e.target.value)}
            value={passwordConfirm}
          />
        </div>

        {/* BOTON DE REGISTRO */}
        <button type="submit" className="btn btn-success">
          Registrarse
        </button>
      </form>
    </>
  );
};

export default Formulario;
