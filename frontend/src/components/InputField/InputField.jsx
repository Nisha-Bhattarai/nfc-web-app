import React from "react";
import "./InputField.css";

const InputField = ({
id,
label,
type = "text",
value,
onChange,
placeholder,
required = false,
autoComplete,
error,
...rest
}) => {
return (
<div className="ec-field">
<label htmlFor={id} className="ec-label-hidden">
{label} {required && <span className="ec-required">*</span>}
</label>
<input
id={id}
name={id}
className={`ec-input ${error ? "ec-input-error" : ""}`}
type={type}
value={value}
onChange={onChange}
placeholder={`${label}${required ? " *" : ""}`}
required={required}
autoComplete={autoComplete}
{...rest}
/>
{error && <p className="ec-hint">{error}</p>}
</div>
);
}

export default InputField