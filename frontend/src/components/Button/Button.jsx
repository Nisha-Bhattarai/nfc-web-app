import React from "react";
import "./Button.css";

const Button = ({ icon: Icon, label, onClick }) => {
  return (
    <button className="outline-button" onClick={onClick}>
      {Icon && <Icon />} {label}
    </button>
  );
};

export default Button;
