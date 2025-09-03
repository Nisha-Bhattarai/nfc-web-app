import React from "react";
import "./SelectField.css";

const SelectField = ({
  id,
  label,
  value,
  onChange,
  options = [],
  required = false,
  error = "",
  placeholder, 
  ...rest
}) => {
  
  const normalized = options.map((opt) =>
    typeof opt === "string" ? { label: opt, value: opt } : opt
  );

  return (
    <div className="ec-field">
      {/* Keep label for accessibility but hide visually */}
      <label htmlFor={id} className="ec-label-hidden">
        {label} {required && <span className="ec-required">*</span>}
      </label>

      <select
        id={id}
        name={id}
        className={`ec-select ${error ? "ec-select-error" : ""}`}
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      >
        <option value="" disabled>
          {(placeholder || label) + (required ? " *" : "")}
        </option>
        {normalized.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error ? (
        <p id={`${id}-error`} className="ec-hint">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default  SelectField