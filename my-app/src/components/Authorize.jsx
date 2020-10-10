import React from "react";

function Authorize({ permissions, render }) {
  const userPerm = "read";

  if (!permissions.includes(userPerm)) {
    return <h2 style={{ color: "red" }}>permissions denied</h2>;
  }

  return render();
}

export default Authorize;
