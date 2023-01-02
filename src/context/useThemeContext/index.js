import React, { createContext, useContext } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";

const ThemeContext = createContext();

const WrapperThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </ThemeProvider>
  );
};

const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Cannot find WrapperThemeProvider");
  }
  return context;
};

export { WrapperThemeProvider, useThemeContext };
