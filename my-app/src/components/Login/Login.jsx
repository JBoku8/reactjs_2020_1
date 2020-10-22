import React, { useEffect, useState, useContext } from "react";
import Form from "../presentation/Form/Form";
import Input from "../presentation/Input/Input";
import PropTypes from "prop-types";

import LocaleContext from "../../context/LocaleContext";

// Services
import {
  getUserSessionToken,
  login,
  setUserSessionToken,
  removeUserSessionToken,
  loginAxios,
} from "../../services/auth";

import { LoginInputs } from "../../utils/inputs";
import translation from "../../locale";

import styles from "./Login.module.css";

function Login({ showRegister }) {
  const [isAuth, setIsAuth] = useState(false);
  const { locale } = useContext(LocaleContext);
  const [translate, setTranslate] = useState(translation[locale]);

  useEffect(() => {
    if (getUserSessionToken()) {
      setIsAuth(true);
    }
  }, []);

  useEffect(() => {
    setTranslate(translation[locale]);
  }, [locale]);

  const onSubmit = async (event) => {
    event.preventDefault();
    const loginData = {
      email: event.target[LoginInputs.email.id].value,
      password: event.target[LoginInputs.password.id].value,
    };
    // login(loginData)
    //   .then((response) => response.json())
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    const { response, error } = await login(loginData);

    // loginAxios(loginData);
    if (!error) {
      setUserSessionToken(response["token"]);
      setIsAuth(true);
    } else {
      alert("Error");
    }
  };

  const onLogOut = (event) => {
    removeUserSessionToken();
    setIsAuth(false);
  };

  if (isAuth) {
    return (
      <div className="text-center">
        <h1 className={`h3 mb-3 font-weight-normal ${styles.error}`}>
          Already logged in.
        </h1>
        <hr />
        <button className="btn btn-info" type="button" onClick={onLogOut}>
          Log Out
        </button>
      </div>
    );
  }

  return (
    <Form className="form-signin" onSubmit={onSubmit}>
      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

      <Input {...LoginInputs.email} />

      <Input {...LoginInputs.password} />

      {/* <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div> */}
      <button className="btn btn-lg btn-primary btn-block" type="submit">
        {translate.login.loginBtn}
      </button>
      <hr />
      <button
        className="btn btn-lg btn-secondary btn-block"
        type="button"
        onClick={showRegister}
      >
        {translate.login.registerBtn}
      </button>
    </Form>
  );
}

Login.propTypes = {
  showRegister: PropTypes.func,
};

export default Login;
