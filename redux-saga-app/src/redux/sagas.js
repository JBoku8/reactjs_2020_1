import { takeEvery, put, call } from "redux-saga/effects";
import { GET_DATA, setData } from "./actions";

const fetchData = () => {
  return fetch(
    "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10"
  ).then((response) => response.json());
};

// worker
function* workerLoadData() {
  const data = yield call(fetchData);
  yield put(setData(data));
}

// watcher
export function* watchLoadData() {
  yield takeEvery(GET_DATA, workerLoadData);
}
