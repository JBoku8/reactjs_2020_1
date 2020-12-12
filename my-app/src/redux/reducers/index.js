import {
  CHANGE_LANGUAGE,
  RESET_LANGUAGE,
  UPDATE_LANGUAGE_LIST,
  FETCH_USERS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
} from "../constants/action-types";

const initialState = {
  users: [],
  isLoading: false,
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;

    case FETCH_USERS:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
  }
}

const errorInitalState = {
  message: "",
  error: null,
};
export function errorReducer(state = errorInitalState, action) {
  switch (action.type) {
    default:
      return state;

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        message: "Error",
        error: action.payload,
      };
  }
}

const initialLang = {
  active: "GE",
  list: ["GE", "EN", "RU", "ES", "FR", "DE"],
};
export function languageReducer(state = initialLang, action) {
  switch (action.type) {
    default:
      return state;

    case RESET_LANGUAGE:
      return { ...initialLang };

    case CHANGE_LANGUAGE:
      return {
        ...state,
        active: action.payload,
      };
    case UPDATE_LANGUAGE_LIST:
      return {
        ...state,
        list: action.payload,
      };
  }
}
