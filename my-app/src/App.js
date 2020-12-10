import { useSelector, useDispatch, connect } from "react-redux";
import { getUsers } from "./redux/actions";
import "./App.css";

function App() {
  const [users, isLoading] = useSelector((state) => {
    return [state.app.users, state.app.isLoading];
  });
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => dispatch(getUsers())}>
          {isLoading ? "Loading..." : "Load users"}
        </button>
        <hr />
        <h2>{users.length}</h2>
      </header>
    </div>
  );
}

const ConnectedApp = connect()(App);

export default ConnectedApp;
