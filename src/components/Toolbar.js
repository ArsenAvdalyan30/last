import React from "react";
import Button from "./Button";

const Toolbar = ({ handleChangeTheme }) => {
  return (
    <>
      <Button>My account</Button>
      <Button>List</Button>
      <Button onClick={handleChangeTheme}>Change theme</Button>
    </>
  );
};

export default Toolbar;
