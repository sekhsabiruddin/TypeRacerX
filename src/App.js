import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Styles/global";
import { useTheme } from "./Context/ThemeContext";
// import { ThemeContextProvider } from "./Context/ThemeContext";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage";
import UserPage from "./Pages/UserPage";
function App() {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
