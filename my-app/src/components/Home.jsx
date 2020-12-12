import { useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import useLocalStorage from "../hooks/useLocalStorage";
import { getUsers } from "../redux/actions";

function Home(props) {
  const [usersList, setUsersList] = useLocalStorage("app-counter:users", []);

  const [users, isLoading] = useSelector((state) => {
    return [state.app.users, state.app.isLoading];
  });

  useEffect(() => {
    setUsersList(users);
  }, [users, setUsersList]);

  const dispatch = useDispatch();
  return (
    <>
      <header className="">
        <button onClick={() => dispatch(getUsers())}>
          {isLoading ? "Loading..." : "Load users"}
        </button>
        <br />
        <h2>{usersList.length}</h2>
      </header>
    </>
  );
}

const ConnectedHome = connect()(Home);

export default ConnectedHome;
