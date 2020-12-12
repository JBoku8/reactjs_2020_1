import { useState, useEffect } from "react";

export default function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    document.title = `Current count is ${count}`;
    return () => {
      document.title = "React Application.";
    };
  }, [count]);

  const increment = (value = 1) => setCount(count + value);
  const decrement = (value = 1) => setCount(count - value);

  return { count, increment, decrement };
}
