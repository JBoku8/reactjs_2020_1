import * as type from "../types";

const initialState = {
  posts: [],
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case type.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case type.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };
    case type.GET_POSTS_FAIL:
      return {
        ...state,
        posts: action.payload,
      };
    case "GET_POSTS_REQUESTED":
      return state;
    default:
      return state;
  }
}
