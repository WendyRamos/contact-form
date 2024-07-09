import React, { useState } from "react";
import Input from "../Inputs/Input";
import RadioButton from "../Inputs/RadioButton";
import TextArea from "../Inputs/TextArea";
import CheckBox from "../Inputs/CheckBox";
import { isEmpty, isEmail, isSelectedRb, isCheckedCb } from "./validation";

function ContactForm() {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    checkBox: false,
  };

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    console.log(formData.checkBox);
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateInput = (data) => {
    const validations = {
      firstName: (value) => isEmpty(value),
      lastName: (value) => isEmpty(value),
      email: (value) => isEmail(value),
      message: (value) => isEmpty(value),
      queryType: (value) => isSelectedRb(value),
      checkBox: (value) => isCheckedCb(value),
    };

    const errors = {};
    for (const [key, validate] of Object.entries(validations)) {
      const error = validate(data[key]);

      if (error) {
        errors[key] = error;
      }
    }
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateInput(formData);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      setFormData(initialFormData);
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="bg-white w-[650px] m-3 p-6 rounded-2xl text-grey-darker">
      <h2 className="font-bold text-3xl mb-3">Contact Us</h2>
      <form className="grid grid-cols-2" onSubmit={handleSubmit} noValidate>
        <Input
          label={"First Name"}
          type={"text"}
          name={"firstName"}
          value={formData.firstName}
          onChange={handleChange}
          required={true}
          stylegrid={"max-[450px]:col-span-2"}
          error={errors.firstName}
        ></Input>
        <Input
          label={"Last Name"}
          type={"text"}
          name={"lastName"}
          value={formData.lastName}
          onChange={handleChange}
          required={true}
          stylegrid={"max-[450px]:col-span-2"}
          error={errors.lastName}
        ></Input>
        <Input
          label={"Email Address"}
          type={"email"}
          name={"email"}
          value={formData.email}
          onChange={handleChange}
          required={true}
          stylegrid={"col-span-2"}
          error={errors.email}
        ></Input>
        <RadioButton
          name="queryType"
          option={"General Enquiry"}
          valueOption={"option1"}
          selectedOption={formData.queryType}
          handleChange={handleChange}
          stylegrid="max-[450px]:col-span-2"
        ></RadioButton>
        <RadioButton
          name="queryType"
          option={"Support Request"}
          valueOption={"option2"}
          selectedOption={formData.queryType}
          handleChange={handleChange}
          stylegrid="max-[450px]:col-span-2"
        ></RadioButton>
        {errors.queryType && (
          <p className="col-span-2 text-red-error text-xs mx-2">
            {errors.queryType}
          </p>
        )}
        <TextArea
          label="Message"
          value={formData.message}
          name="message"
          className="max-[450px]:h-52"
          stylegrid="col-span-2"
          onChange={handleChange}
          rows="3"
          error={errors.message}
        ></TextArea>
        <CheckBox
          label="I consent to being contacted by the team"
          name="checkBox"
          value={true}
          checked={formData.checkBox}
          onChange={handleChange}
          stylegrid="col-span-2"
          error={errors.checkBox}
        ></CheckBox>
        <button className="bg-green-medium col-span-2 p-3 text-white rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
