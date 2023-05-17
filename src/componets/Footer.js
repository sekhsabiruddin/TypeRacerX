import React, { useState } from "react";
import Select from "react-select";
import { themeOptions } from "../Utils/themeOptions";
import { useTheme } from "../Context/ThemeContext";

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

  const handleChange = (selectedOption) => {
    setTheme(selectedOption.value);
    setSelectedValue(selectedOption);
    console.log("color", selectedOption.value);
    localStorage.setItem("theme", JSON.stringify(selectedOption.value));
  };

  return (
    <div className="footer">
      <div className="links">links</div>
      <div className="themeButton">
        <Select
          value={selectedValue}
          onChange={handleChange}
          options={themeOptions} // Make sure to import and provide the correct options
          styles={customStyles}
          menuPlacement="top"
        />
      </div>
    </div>
  );
};

export default Footer;
