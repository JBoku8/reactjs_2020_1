import React, { useState } from "react";

import "./Theme.css";

const ThemeStyles = {
  dark: {
    color: "#fff",
    padding: "20px",
    backgroundColor: "darkcyan",
  },
  light: {
    color: "#333",
    padding: "15px",
    backgroundColor: "lightgreen",
  },
};

const Theme = ({ theme, children }) => {
  return (
    <div className={`container`} style={ThemeStyles[theme]}>
      <h2>Page Theme</h2>
      {children}
    </div>
  );
};

export default Theme;
