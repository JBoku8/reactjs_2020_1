import React, { useContext, useEffect } from "react";
import LocaleContext from "../../../context/LocaleContext";

function Nav(props) {
  const { locale, toggleLocale } = useContext(LocaleContext);

  useEffect(() => {
    console.log("LOCALE updated");
  }, [locale]);

  return (
    <div className="text-center">
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-secondary"
          disabled={locale === "ge"}
          onClick={() => toggleLocale()}
        >
          GE
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          disabled={locale === "en"}
          onClick={() => toggleLocale()}
        >
          EN
        </button>
      </div>
    </div>
  );
}

export default Nav;
