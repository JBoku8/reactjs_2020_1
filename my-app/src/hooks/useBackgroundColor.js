import { useEffect } from "react";

export default function useBackgroundColor(initial = "white") {
  useEffect(() => {
    const { body } = document;

    const setColor = (color = "white") => {
      body.style.backgroundColor = color;
    };

    const keyUpHandler = (event) => {
      if (event.key === "r") {
        setColor("red");
      } else if (event.key === "g") {
        setColor("yellowgreen");
      } else {
        setColor();
      }
    };
    window.addEventListener("keyup", keyUpHandler);

    setColor(initial);

    return () => {
      window.removeEventListener("keyup", keyUpHandler);
      setColor();
    };
  }, [initial]);
}
