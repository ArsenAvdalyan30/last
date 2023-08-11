import React, { useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ThemeContext } from "./ThemeContext";

const Main = ({ handleChangeTheme }) => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <Header handleChangeTheme={handleChangeTheme} />
      <br />
      <br />
      <div
        style={{
          backgroundColor: theme === "light" ? "yellow" : "black",
          color: theme === "light" ? "black" : "white",
        }}
      >
        Content
      </div>
      <br />
      <Footer />
    </div>
  );
};
export default Main;
