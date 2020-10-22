import React from "react";
import Form from "../presentation/Form/Form";
import PropTypes from "prop-types";

function Registration({ showLogin }) {
  return (
    <Form className="form-signin">
      <h1 className="h3 mb-3 font-weight-normal">Sign up form</h1>
      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Register
      </button>
      <hr />
      <button
        className="btn btn-lg btn-warning btn-block"
        type="button"
        onClick={showLogin}
      >
        Sign In
      </button>
    </Form>
  );
}

Registration.propTypes = {
  showLogin: PropTypes.func,
};

export default Registration;
