import { connect, useSelector, useDispatch } from "react-redux";
import { NavLink, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Counter from "./components/Counter";

import { changeLanguage } from "./redux/actions/language";

import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  const [activeLang, langList] = useSelector((state) => {
    const { lang } = state;

    return [lang.active, lang.list];
  });

  const [, updateLanguage] = useLocalStorage(
    "app-counter:language",
    activeLang
  );

  useEffect(() => {
    updateLanguage(activeLang);
  }, [activeLang, updateLanguage]);

  return (
    <div className="App">
      <nav>
        <NavLink to="/">Home</NavLink> <NavLink to="/counter">Counter</NavLink>
        <br />
        <br />
        {langList &&
          langList.map((language, index) => {
            return (
              <button
                key={`${language}-${index}`}
                onClick={() => dispatch(changeLanguage(language))}
                style={{
                  backgroundColor: activeLang === language ? "red" : null,
                }}
              >
                {language}
              </button>
            );
          })}
      </nav>
      <hr />
      <Switch>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

const ConnectedApp = connect()(App);

export default ConnectedApp;
