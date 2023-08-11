import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Button = ({ children, onClick }) => {
  const theme = useContext(ThemeContext)

  return (
    <button
      style={{
        backgroundColor: theme.value === "light" ? "yellow" : "black",
        color: theme.value === "light" ? "black" : "white",
      }}
      onClick={theme.handleChange}
    >
      {children}
    </button>
  );
};

export default Button;
