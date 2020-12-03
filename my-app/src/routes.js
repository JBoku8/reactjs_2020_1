import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import ReducerComponent from "./components/ReducerComponent/ReducerComponent";
import LazyComponent from "./components/LazyComponent/LazyComponent";
import NotFound from "./components/presentation/NotFound/NotFound";
import Profile from "./components/Profile/Profile";
import ReduxComponent from "./components/ReduxComponent/ReduxComponent";

export const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/reducer-component",
    component: ReducerComponent,
  },
  {
    path: "/redux-component",
    component: ReduxComponent,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Registration,
  },
  {
    path: "/lazy-route",
    component: LazyComponent,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "*",
    component: NotFound,
  },
];
