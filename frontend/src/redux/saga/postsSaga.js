import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { GET_POSTS_FAIL, GET_POSTS_SUCCESS } from "../types";

function getPostsAPI() {
  return Axios.get("/posts").catch((err) => console.log(err));
}

function* fetchPosts(action) {
  try {
    // console.log("adadad");
    const result = yield call(getPostsAPI);
    yield put({
      type: GET_POSTS_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: GET_POSTS_FAIL,
      message: e.message,
    });
  }
}

function* postSaga() {
  yield takeEvery("GET_POSTS_REQUESTED", fetchPosts);
}

export default postSaga;
