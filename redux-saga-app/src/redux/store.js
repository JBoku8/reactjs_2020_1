import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddlware from "redux-saga";

import { reducer } from "./reducers";
import { watchLoadData } from "./sagas";

const sagaMiddlware = createSagaMiddlware();
const store = createStore(reducer, applyMiddleware(logger, sagaMiddlware));

sagaMiddlware.run(watchLoadData);

export default store;
