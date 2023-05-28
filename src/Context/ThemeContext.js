import React, { createContext, useContext, useState } from "react";
import { themeOptions } from "../Utils/themeOptions";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  //   console.log("default theme ", themeOptions[0].value);
  const defaultvalue =
    JSON.parse(localStorage.getItem("theme")) || themeOptions[0].value;
  const [theme, setTheme] = useState(defaultvalue);
  console.log("default theme", JSON.parse(localStorage.getItem("theme")));
  const values = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
