import React from "react";

import Title from "./Title";
import Header from "./components/Header/Header";
import Navigation from "./components/Header/Navigation";
import authProtection from "./hoc/AuthProtection";
import "./App.css";
import UserName from "./components/UserName";
import Authorize from "./components/Authorize";
import Clock from "./components/Clock/Clock";

function Question({ answer }) {
  return <div>The answer is {answer}</div>;
}

function Answer() {
  return <span>78</span>;
}

// App -> Header -> Nav

function App() {
  const ProtectedComponent = authProtection(Title);
  const user = {
    firstName: "John",
    lastName: "Doe",
  };
  return (
    <div className="App">
      <Clock time={new Date()} />
      <hr />
      Childrens API, children prop
      <Header title={<Title text="Hello React" />}>
        <Navigation />
      </Header>
      <hr />
      Higher-Order Function
      <ProtectedComponent text="Example HOC" />
      <hr />
      render prop
      {/* <UserName
        render={() => {
          return <Answer />;
        }}
      >
        {user}
      </UserName> */}
      <hr />
      <Authorize
        permissions={["read"]}
        render={() => {
          return <Question answer={<Answer />} />;
        }}
      />
    </div>
  );
}

export default App;
