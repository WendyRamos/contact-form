import React from "react";
import ActivateCheckbox from "../../assets/images/icon-checkbox-check.svg";

function Checkbox({ label, name, value, checked, onChange, stylegrid, error }) {
  return (
    <div className={`flex flex-col m-2 cursor-pointer mx-2 my-10 ${stylegrid}`}>
      <label className="flex flex-row">
        <input
          type="checkbox"
          value={value}
          name={name}
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div
          className={`w-5 h-5 border-2 flex items-center justify-center ${
            checked
              ? "bg-green-medium border-green-medium"
              : "bg-white border-grey-medium"
          }`}
        >
          {checked && (
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns={ActivateCheckbox}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          )}
        </div>
        <p className="ml-2">{label}</p>
      </label>
      {error && <p className="text-red-error text-xs mt-1">{error}</p>}
    </div>
  );
}

export default Checkbox;
