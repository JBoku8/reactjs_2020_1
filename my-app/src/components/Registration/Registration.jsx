import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Form from "../presentation/Form/Form";

function Registration({ showLogin }) {
  return (
    <Form className="form-signin">
      <h1 className="h3 mb-3 font-weight-normal">Sign up form</h1>
      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Register
      </button>
      <hr />
      <Link
        className="btn btn-lg btn-warning btn-block"
        to={{
          pathname: "/login",
          custom: "ULA LA",
        }}
      >
        Sign In
      </Link>
    </Form>
  );
}

Registration.propTypes = {
  showLogin: PropTypes.func,
};

export default Registration;
