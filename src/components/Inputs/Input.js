import React from "react";

function Input({
  label,
  type,
  id,
  name,
  stylegrid,
  value,
  onChange,
  required,
  className,
  error,
}) {
  return (
    <div className={`flex flex-col m-2 ${stylegrid}`}>
      <label htmlFor={id} className="text-sm">
        {label}
        <span className="text-green-medium"> *</span>
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`input ${className} ${error ? "border-red-error" : ""}`}
      ></input>
      {error && <p className="text-red-error text-xs mt-1">{error}</p>}
    </div>
  );
}

export default Input;
