import React from "react";

import HelloWorld from "./Hello";
import { Button, ResetButton, SubmitButton, Input } from "./Buttons";

import "./App.css";

function App(props) {
  const title = "App Component";

  return (
    <div className="App">
      <h2 className="text-red">{title}</h2>
      <h4>{6 * 4}</h4>
      <HelloWorld />
      <hr />
      <Button text="Custom Button" className="custom--button text-red" />
      <SubmitButton />
      <ResetButton />
      <Input />
    </div>
  );
}

export default App;
