import useCounter from "../hooks/useCounter";
import useBackgroundColor from "../hooks/useBackgroundColor";
import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const buttonStyle = {
  marginTop: "10px",
  padding: "20px 10px",
};

export default function Counter(props) {
  const [value, setValue] = useLocalStorage("app-counter:value");
  const { count, increment, decrement } = useCounter(value);
  useBackgroundColor();

  useEffect(() => {
    setValue(count);
  }, [count, setValue]);

  return (
    <div>
      <h2>Counter page</h2>
      <h4>Count: {count}</h4>
      <div>
        <button style={buttonStyle} onClick={() => increment(10)}>
          Increment
        </button>
      </div>
      <div>
        <button style={buttonStyle} onClick={() => decrement(5)}>
          Decrement
        </button>
      </div>
    </div>
  );
}
