import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaSun,
  FaMoon,
} from "react-icons/fa";

const Socials = ({ className, theme, toggleTheme }) => {
  return (
    <div className={`socials ${className}`}>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          toggleTheme();
        }}
        aria-label="Toggle Theme"
      >
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </a>
      <a
        href="https://www.linkedin.com/in/dave-smith-180951265/"
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/16000psi"
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="mailto:davidjhnsmith@gmail.com"
        aria-label="Email"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope />
      </a>
    </div>
  );
};

export default Socials;
