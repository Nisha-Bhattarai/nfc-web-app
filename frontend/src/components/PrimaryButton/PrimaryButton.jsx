import React from "react";
import "./PrimaryButton.css";


const PrimaryButton = ({ children, type = "button", disabled, onClick }) => {
return (
<button type={type} className="ec-button" disabled={disabled} onClick={onClick}>
{children}
</button>
);
}

export default PrimaryButton