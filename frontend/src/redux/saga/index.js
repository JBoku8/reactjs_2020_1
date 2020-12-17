import { all } from "redux-saga/effects";
import postSaga from "./postsSaga";

export default function* rootSaga() {
  yield all([postSaga]);
}
