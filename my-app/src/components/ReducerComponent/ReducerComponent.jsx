import React, { useReducer } from "react";

const ACTION_INCREMENT = "INCREMENT";
const ACTION_DECREMENT = "DECREMENT";
const ACTION_ADD_NUMBER = "ADD_NUMBER";
const ACTION_RESET = "RESET";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case ACTION_INCREMENT:
      return {
        count: state.count + 1,
      };
      break;
    case ACTION_DECREMENT:
      return {
        count: state.count - 1,
      };
      break;
    case ACTION_RESET:
      return {
        count: 0,
      };
      break;
    case ACTION_ADD_NUMBER:
      return {
        count: state.count + action.add,
      };
      break;
    default:
      return { count: state.count };
  }
}

function ReducerComponent(props) {
  const [countState, countDispatcher] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>ReducerComponent</h2>
      <h2>Counted: {countState.count}</h2>
      <button
        className="btn btn-primary"
        onClick={() => countDispatcher({ type: ACTION_INCREMENT })}
      >
        Inc
      </button>
      <button
        className="btn btn-info"
        onClick={() => countDispatcher({ type: ACTION_RESET })}
      >
        RESET
      </button>
      <button
        className="btn btn-info"
        onClick={() => countDispatcher({ type: ACTION_ADD_NUMBER, add: 10 })}
      >
        Add 10
      </button>
      <button
        className="btn btn-danger"
        onClick={() => countDispatcher({ type: ACTION_DECREMENT })}
      >
        Dec
      </button>
    </div>
  );
}

export default ReducerComponent;
