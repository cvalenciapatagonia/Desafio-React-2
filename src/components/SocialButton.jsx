import React from "react";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

const SocialButton = ({ githubIcon, facebookIcon, linkedInnIcon }) => {
  return (
    <div className="icon-container">
      {githubIcon && (
        <a href="#" className="icon">
          <FaGithub />
        </a>
      )}
      {facebookIcon && (
        <a href="#" className="icon">
          <FaFacebook />
        </a>
      )}
      {linkedInnIcon && (
        <a href="#" className="icon">
          <FaLinkedin />
        </a>
      )}
    </div>
  );
};

export default SocialButton;
