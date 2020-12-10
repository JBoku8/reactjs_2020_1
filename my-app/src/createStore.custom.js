// getState
// subscribe
// unsubscribe
// dispatch

const createStore = (reducer) => {
  let state = reducer(undefined, {});
  let listeners = [];

  const getState = () => state;
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((oldListener) => oldListener !== listener);
    };
  };

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  return {
    getState,
    subscribe,
    dispatch,
  };
};

const initial = {
  message: "default",
  error: false,
  data: [],
};
// spread ...object
// concat()
// Object.assign({})
const ACTION_HELLO = "HELLO";
const reducer = function (state = initial, action) {
  switch (action.type) {
    case ACTION_HELLO:
      return {
        ...state,
        message: "Hello World",
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log(store.getState());

const log = () => {
  console.log("State updated");
};
const unsubscribe = store.subscribe(log);

store.dispatch({
  type: ACTION_HELLO,
});

store.dispatch({
  type: ACTION_HELLO,
});

console.log(store.getState());

// BigObject = {
//   users: userReducer,
//   cart: cartReducer,
//   profile: profileReducer
// }
