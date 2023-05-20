import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { TextModeContextProvider } from "./Context/TextModeContext";
import { ThemeContextProvider } from "./Context/ThemeContext";
import { BrowserRouter } from "react-router-dom";
const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeContextProvider>
    <TextModeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TextModeContextProvider>
  </ThemeContextProvider>
);
