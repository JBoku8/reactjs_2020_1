import React from "react";

function Header({ children, title }) {
  return (
    <header>
      {title}
      {children}
    </header>
  );
}

export default Header;
