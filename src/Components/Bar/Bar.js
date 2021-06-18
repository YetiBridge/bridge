import React from "react";
import "./Bar.css";

const Bar = ({ children }) => {
  return <h2 className="bar">{children}</h2>;
};

export default Bar;
