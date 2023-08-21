import React from "react";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import Alert from "./Alert";


const Registro = ({ appAlertMessage, appAlertType, setAppAlertMessage, setAppAlertType }) => {
  return (
    <>
      <h1 className="fw-bold">Crea una cuenta</h1>
      <SocialButton
        githubIcon={<FaGithub />}
        facebookIcon={<FaFacebook />}
        linkedInnIcon={<FaLinkedin />}
      />
      <p className="fst-italic">O usa tu email para registrarte</p>
      <Formulario
        setAppAlertMessage={setAppAlertMessage}
        setAppAlertType={setAppAlertType}
      />
      <Alert message={appAlertMessage} type={appAlertType} />
    </>
  );
};

export default Registro;
