import React, { useState } from "react";

const Input = (props) => {
  //   const [value, setValue] = useState(props.value);
  return (
    <input
      value={props.value}
      placeholder={props.placeholder}
      name=""
      onChange={props.onChange}
    />
  );
};

export default Input;
