import React from "react";

function RadioButton({
  name,
  option,
  valueOption,
  selectedOption,
  handleChange,
  stylegrid,
}) {
  return (
    <div className={`grid text-base mx-2 ${stylegrid}`}>
      <label
        className={`flex cursor-pointer border border-grey-medium rounded-md my-2 p-2 ${
          selectedOption === valueOption
            ? "bg-green-lighter border border-green-medium"
            : "bg-transparent"
        }`}
      >
        <input
          type="radio"
          name={name}
          value={valueOption}
          checked={selectedOption === valueOption}
          onChange={handleChange}
          className="sr-only"
        />
        <div
          className={`radio-button ${
            selectedOption === valueOption
              ? "border-green-medium"
              : "border-grey-medium"
          }`}
        >
          <div
            className={`w-3 h-3 rounded-full ${
              selectedOption === valueOption
                ? "bg-green-medium"
                : "bg-transparent"
            }`}
          ></div>
        </div>
        <span className="ml-2">{option}</span>
      </label>
    </div>
  );
}

export default RadioButton;
