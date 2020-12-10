import {
  FETCH_USERS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
} from "../constants/action-types";

export const fetchUsers = () => ({
  type: FETCH_USERS,
});
export const fetchUsersFailure = (payload) => ({
  type: FETCH_USERS_FAILURE,
  payload,
});

export const fetchUsersSuccess = (payload) => ({
  type: FETCH_USERS_SUCCESS,
  payload,
});

export const getUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsers());
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchUsersSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchUsersFailure(err));
      });
  };
};
