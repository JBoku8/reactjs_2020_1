import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const counter = 0;

// const update = () => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App counter={counter} />
//     </React.StrictMode>,
//     document.getElementById("root")
//   );
// };

ReactDOM.render(
  <React.StrictMode>
    <App counter={counter} />
  </React.StrictMode>,
  document.getElementById("root")
);

// setInterval(() => {
//   update();
//   counter += 1;
// }, 1000);
