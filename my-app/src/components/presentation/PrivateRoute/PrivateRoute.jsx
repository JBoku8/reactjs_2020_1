import React, { useState, useContext } from "react";
import { Redirect, useLocation } from "react-router-dom";

import AuthContext from "../../../context/AuthContext";

function PrivateRoute({ Component, ...rest }) {
  const authContext = useContext(AuthContext);
  const [isAuth, setIsAuth] = useState(() => {
    // API CALL
    // USER OBJECT
    return authContext.authed;
  });
  // const { render } = props;
  const location = useLocation();

  if (!isAuth) {
    return (
      <Redirect
        to={{
          pathname: "/login",
          fromUrl: location.pathname,
        }}
      />
    );
  }

  return <Component {...rest} />;
}

export default PrivateRoute;
