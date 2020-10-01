import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

const MainApp = (
  <div>
    <h2>H2 Main App</h2>
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("my-app")
);

// JSX Syntax
// 1
// const jsxExample = (
//   <div id="jsx-id">
//     <h1>H1 Title, ReactJS</h1>
//   </div>
// );

// React Core
// 2
// const element = React.createElement(
//   "div",
//   {
//     id: "test-div",
//   },
//   React.createElement("h1", null, "H1 Title, ReactJS")
// );

// Plain JS
// 3
// const div = document.createElement("div");
// div.setAttribute("id", "custom-div");

// const h1 = document.createElement("h1");
// const textNode = document.createTextNode("H1 Title Plain Js");
// h1.append(textNode);
// div.appendChild(h1);

// document.body.append(div);

// document.addEventListener("click", () => {
//   textNode.textContent = Date.now().toLocaleString();
// });

// ReactDOM.render(null, document.getElementById("my-app"));
