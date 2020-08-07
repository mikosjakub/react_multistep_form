import React, { Fragment } from "react";

const ItemForm = (
  { name, label, type = "text", value, onChange, disabled = false },
  required = true
) => (
  <div className="form-container">
    {type === "text" ? (
      <Fragment>
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          name={name}
          onChange={(e) => onChange(e)}
          value={value}
          required={required}
          disabled={disabled}
        />
      </Fragment>
    ) : (
      <Fragment>
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          name={name}
          onChange={(e) => onChange(e)}
          value={value}
          required={required}
          disabled={disabled}
        />
      </Fragment>
    )}
  </div>
);

export default ItemForm;
