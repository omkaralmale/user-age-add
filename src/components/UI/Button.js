import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button
      className="btn"
      type={props.type || "button"}
      onClick={props.onClick}>
      Add User
    </button>
  );
};

export default Button;
