import React from "react";
import "./YetiButton.css";
import "../../pancake-toolkit/packages/pancake-uikit/src/components/Button";

const YetiButton = ({ children }) => {
  return <button className="YetiButton">{children}</button>;
};

export default YetiButton;
