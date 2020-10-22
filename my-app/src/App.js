import React, { useState, useContext } from "react";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Nav from "./components/presentation/Nav/Nav";

import LocaleContext from "./context/LocaleContext";

import "./App.css";

function App() {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const defaultLocaleValue = useContext(LocaleContext);

  const [locale, setLocale] = useState(defaultLocaleValue);

  const initialContext = {
    locale,
    toggleLocale() {
      if (locale === "en") setLocale("ge");
      else setLocale("en");
    },
  };

  return (
    <LocaleContext.Provider value={initialContext}>
      <Nav />
      <hr />
      <div className="container text-center">
        {showLoginForm && (
          <Login
            showRegister={() => {
              setShowLoginForm(false);
            }}
          />
        )}
        {!showLoginForm && (
          <Registration showLogin={(event) => setShowLoginForm(true)} />
        )}
      </div>
    </LocaleContext.Provider>
  );
}

export default App;
