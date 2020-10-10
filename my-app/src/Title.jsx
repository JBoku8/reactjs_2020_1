import React from "react";
import PropTypes from "prop-types";

function Title({ text, children, title }) {
  return (
    <h1 title={title}>
      {text} {children}
    </h1>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

Title.defaultProps = {
  text: "",
  title: "",
};

export default Title;
