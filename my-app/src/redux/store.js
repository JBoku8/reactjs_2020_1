import { createStore, compose, applyMiddleware } from "redux";
import { counterReducer } from "./reducers/counterReducer";

const middlewares = [];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootStore = createStore(
  counterReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default rootStore;
