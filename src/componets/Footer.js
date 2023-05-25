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

  return (
    <div className="footer">
      <div className="links">
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>contact</span>
        </div>

        <div>
          <FontAwesomeIcon icon={faLinkedin} />
          <span>Linkeden</span>
        </div>

        <div>
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
