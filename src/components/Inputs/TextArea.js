import React from "react";

function TextArea({
  label,
  value,
  name,
  stylegrid,
  className,
  onChange,
  rows,
  error,
}) {
  return (
    <div className={`flex flex-col m-2 ${stylegrid}`}>
      <label className="text-sm">
        {label}
        <span className="text-green-medium"> *</span>
      </label>
      <textarea
        className={`input cursor-text ${className} ${error ? "border-red-error" : ""}`}
        value={value}
        name={name}
        onChange={onChange}
        rows={rows}
      ></textarea>
      {error && <p className="text-red-error text-xs my-2">{error}</p>}{" "}
    </div>
  );
}

export default TextArea;
