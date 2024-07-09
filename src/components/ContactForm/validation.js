export const isEmpty = (value) => {
    return !value ? "This field is required" : null;
  };
  
  export const isEmail = (value) => {
    if (!value) return "This field is required";
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) return "Please enter a valid email address";
    return null;
  };

  export const isSelectedRb = (value) => {
    return !value ? "Please select a query type" : null;
  };

  export const isCheckedCb = (value) => {
    return !value ? "To submit this form, please consent to being contacted" : null;
  };