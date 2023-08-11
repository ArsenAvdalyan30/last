import React, { Component, useEffect, useState } from "react";

function Section({ initialValue, obj }) {
  const [inputValue, setInputValue] = useState(initialValue || "");

  useEffect(() => {
    console.log(`obj value is ${obj.value}`)
  }, [obj]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return <input value={inputValue} onChange={handleChange} />;
}

export default Section;



