import React, { useState, useEffect } from "react";

import "./App.css";
import Button from "./Button";
import Input from "./Input";
import Theme from "./Theme";

const Title = ({ text }) => <h1>{text}</h1>;

const Display = ({ text }) => <h2>{text}</h2>;

const Hello = (props) => {
  const year = () => {
    const now = new Date().getFullYear();
    return now - props.age;
  };

  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old;
      </p>
      <p>Birth Year - {year()}</p>
    </div>
  );
};

Hello.defaultProps = {
  name: "John",
  age: 0,
};

function App({ counter: counterInitial }) {
  const [counter, setCounter] = useState(counterInitial);
  const [displayValue, setDisplayValue] = useState(counterInitial);
  const [showNames, setShowNames] = useState(false);

  const [inputValue, setInputValue] = useState("");

  const name = "Peter";
  const age = 15;

  const names = ["John", "Peter", "Anna", "James"];

  const plusOne = (e) => {
    // console.log("clicked", e);
    setCounter(counter + 1);
  };

  const minusOption = (value) => {
    return (event) => {
      // console.log("handleClickMinus", event);
      setCounter(counter - value);
    };
  };

  // const timerId = setTimeout(() => setCounter(counter + 1), 1000);
  useEffect(() => {
    console.log("rendering counter value", counter);
    if (counter === 3) {
      setShowNames(true);
    } else {
      setShowNames(false);
    }
  }, [counter, setShowNames]);

  useEffect(() => {
    console.log("rendering displayValue value", displayValue);
    // setCounter(0);
  }, [displayValue]);

  // if (counter > 10) {
  //   console.log("Timer Id", timerId);
  //   clearTimeout(timerId);
  //   return null;
  // }
  return (
    <div className="App">
      <Title text={counter} />
      {/* <Display text={displayValue} /> */}

      <Theme theme={inputValue}>
        <Display text={inputValue} />
      </Theme>
      <Input
        value={inputValue}
        placeholder="start typing..."
        onChange={({ target }) => {
          setInputValue(target.value);
        }}
      />
      {/* <Hello name={name} age={age} /> */}
      {/* <Hello name="Anna" age={24 + 15} /> */}

      {/* plain button */}
      <button onClick={plusOne}>Plus</button>
      <button onClick={(e) => setCounter(0)}>Zero</button>
      <button onClick={minusOption(3)}>Minus</button>

      {/* with Component */}
      {/* <Button text="Plus" handleClick={plusOne} /> */}
      {/* <Button text="Zero" handleClick={(e) => setCounter(0)} /> */}
      {/* <Button text="Minus 5" handleClick={minusOption(5)} /> */}
      <hr />
      {/* <Button
        text="Update Display"
        handleClick={() => setDisplayValue(Math.random().toString())}
      /> */}

      {showNames &&
        names.map((name, index) => {
          return <p key={`${name}-${index}`}>{name}</p>;
        })}
    </div>
  );
}

export default App;
