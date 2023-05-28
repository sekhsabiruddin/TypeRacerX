import React, { useState } from "react";
import Select from "react-select";
import { themeOptions } from "../Utils/themeOptions";
import { useTheme } from "../Context/ThemeContext";
import { FaPalette } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";
import ColorBox from "./ColorBox";

const Footer = () => {
  const { setTheme } = useTheme();

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "transparent",
      width: "300px",
      borderRadius: "4px",
      border: "1px solid #fff",
    }),
  };

  const [selectedValue, setSelectedValue] = useState(null);

  const handleEmailClick = () => {
    window.open("https://wa.me/8016839521", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/sk-sabiruddin-406904217/",
      "_blank"
    );
  };

  const handleGithubClick = () => {
    window.open("https://github.com/sekhsabiruddin", "_blank");
  };

  return (
    <div className="footer">
      <div className="links">
        <div onClick={handleEmailClick}>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Contact</span>
        </div>

        <div onClick={handleLinkedInClick}>
          <FontAwesomeIcon icon={faLinkedin} />
          <span>LinkedIn</span>
        </div>

        <div onClick={handleGithubClick}>
          <FontAwesomeIcon icon={faCode} />
          <span>Github</span>
        </div>
      </div>
      <div className="themeButton">
        <ColorBox />
      </div>
    </div>
  );
};

export default Footer;
