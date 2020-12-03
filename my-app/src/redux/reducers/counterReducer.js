import {
  ACTION_ADD_NUMBER,
  ACTION_DECREMENT,
  ACTION_INCREMENT,
  ACTION_RESET,
  ACTION_MINUS_NUMBER,
} from "../actions/counter";

const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_INCREMENT:
      return {
        count: state.count + 1,
      };
    case ACTION_DECREMENT:
      return {
        count: state.count - 1,
      };
    case ACTION_RESET:
      return {
        count: 0,
      };
    case ACTION_ADD_NUMBER:
      return {
        count: state.count + action.value,
      };
    case ACTION_MINUS_NUMBER:
      return {
        count: state.count - action.value,
      };
    default:
      return { count: state.count };
  }
};
