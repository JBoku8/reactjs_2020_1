import React from "react";
import Title from "../Title";

function UserName({ children, render }) {
  return (
    <div>
      <Title text={children.firstName} />
      {children.lastName}
      {render()}
    </div>
  );
}

export default UserName;
