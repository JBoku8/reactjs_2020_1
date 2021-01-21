import { GET_DATA } from "./actions";

const initialState = {
  data: {},
};

export function reducer(state = initialState, action) {
  if (action.type === GET_DATA) {
    return state;
  }

  return state;
}
