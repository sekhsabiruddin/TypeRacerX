import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { TextModeContextProvider } from "./Context/TextModeContext";
import { ThemeContextProvider } from "./Context/ThemeContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeContextProvider>
    <TextModeContextProvider>
      <App />
    </TextModeContextProvider>
  </ThemeContextProvider>
);
