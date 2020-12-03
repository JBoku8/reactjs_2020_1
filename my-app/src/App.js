import React, { useState, useContext, useEffect, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Profile from "./components/Profile/Profile";
import NotFound from "./components/presentation/NotFound/NotFound";
import PrivateRoute from "./components/presentation/PrivateRoute/PrivateRoute";

import Nav from "./components/presentation/Nav/Nav";

import LocaleContext from "./context/LocaleContext";
import AuthContext, {
  initialContext as initialAuthContext,
} from "./context/AuthContext";

import { getUserSessionToken } from "./services/auth";

import { routes } from "./routes";

import "./App.css";

const LazyComponent = React.lazy(() => {
  return import("./components/LazyComponent/LazyComponent");
});

function RouteRenderer({ route }) {
  return (
    <Route path={route.path} exact={route.exact}>
      {<route.component />}
    </Route>
  );
}

function App() {
  // const [showLoginForm, setShowLoginForm] = useState(true);
  const defaultLocaleValue = useContext(LocaleContext);
  // const authed = useContext(AuthContext);

  const [locale, setLocale] = useState(defaultLocaleValue);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    if (getUserSessionToken()) {
      setAuthed(true);
    }
  }, []);

  const initialLocaleContext = {
    locale,
    toggleLocale() {
      if (locale === "en") setLocale("ge");
      else setLocale("en");
    },
  };

  const initialAuthContext = {
    authed,
    logOut() {
      setTimeout(() => {
        setAuthed(false);
      }, 1000);
    },
    logIn() {
      setTimeout(() => {
        setAuthed(true);
      }, 2000);
    },
  };

  return (
    <LocaleContext.Provider value={initialLocaleContext}>
      <AuthContext.Provider value={initialAuthContext}>
        <Nav />
        <hr />
        <div className="container text-center">
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route path={route.path} exact={route.exact} key={route.path}>
                  {<route.component />}
                </Route>
              );
            })}

            {/* <PrivateRoute
              to="/profile"
              Component={Profile}
              title="Profile Page Title"
            /> */}

            {/* <Route path="/lazy-route">
              <Suspense fallback={<h1>Lazy Component is loading...</h1>}>
                <LazyComponent />
              </Suspense>
            </Route> */}
          </Switch>
        </div>
      </AuthContext.Provider>
    </LocaleContext.Provider>
  );
}

export default App;
