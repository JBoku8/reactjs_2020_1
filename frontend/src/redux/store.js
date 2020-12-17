import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./saga";

const sagaMiddlware = createSagaMiddleware();

const newStore = compose(
  applyMiddleware(sagaMiddlware),
  window.devToolsExtension && window.devToolsExtension()
)(createStore)(rootReducer);
// const store = createStore(rootReducer);
sagaMiddlware.run(rootSaga);

export default newStore;
