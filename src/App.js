import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Styles/global";
import TypingBox from "./componets/TypingBox";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import { useTheme } from "./Context/ThemeContext";
import { ThemeContextProvider } from "./Context/ThemeContext";

function App() {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="canvas">
        <Header />
        <TypingBox />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
