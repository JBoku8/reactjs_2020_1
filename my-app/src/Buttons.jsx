import React from "react";

export const Button = (props) => {
  console.log("Button", props);
  return (
    <button type="button" className={props.className}>
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  text: "Default Button",
  className: "default--style",
};

export const SubmitButton = (props) => (
  <button type="submit">Submit Button</button>
);
export const ResetButton = (props) => {
  return <button type="reset">Reset Button</button>;
};

export const Input = (props) => {
  return <input defaultValue="My Input" />;
};
