import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import reduxLogger from "redux-logger";
import logger from "./middleware/logger";
import { rootReducer, errorReducer } from "./reducers";

const middlewares = [logger, thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combinedReducers = combineReducers({
  app: rootReducer,
  errors: errorReducer,
});

const store = createStore(
  combinedReducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
