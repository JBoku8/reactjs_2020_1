import React, { useState, useEffect } from "react";

function enhenceComponent(Component) {
  return function AuthProtection(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
      fetch("https://reqres.in/api/users/2")
        .then((response) => {
          return response.json();
        })
        .then(({ data }) => {
          const auth = data.id === 5;
          setIsAuthenticated(auth);
          setUser(data);
        })
        .catch((err) => {
          console.error("ERROR [AuthProtection.jsx]", err);
        });
    }, [setIsAuthenticated]);

    return (
      <div className="HOC-Container">
        {isAuthenticated && user ? (
          <Component {...props} title={user.email} />
        ) : null}
      </div>
    );
  };
}

export default enhenceComponent;
