import React, { useReducer } from "react";

import {
  createActionDecrement,
  createActionIncrement,
  createActionReset,
  createActionAddNumber,
  createActionMinusNumber,
} from "../../actions";

import { counterReducer } from "../../reducers";

const initialState = { count: 0 };

function ReducerComponent(props) {
  const [countState, countDispatcher] = useReducer(
    counterReducer,
    initialState
  );
  return (
    <div>
      <h2>ReducerComponent</h2>
      <h2>Counted: {countState.count}</h2>
      <button
        className="btn btn-primary"
        onClick={() => countDispatcher(createActionIncrement())}
      >
        Inc
      </button>
      <button
        className="btn btn-info"
        onClick={() => countDispatcher(createActionReset())}
      >
        RESET
      </button>
      <button
        className="btn btn-info"
        onClick={() => countDispatcher(createActionAddNumber(10))}
      >
        +10
      </button>
      <button
        className="btn btn-info"
        onClick={() => countDispatcher(createActionAddNumber(100))}
      >
        +100
      </button>
      <button
        className="btn btn-info"
        onClick={() => countDispatcher(createActionMinusNumber(10))}
      >
        -10
      </button>

      <button
        className="btn btn-info"
        onClick={() => countDispatcher(createActionMinusNumber(100))}
      >
        -100
      </button>
      <button
        className="btn btn-danger"
        onClick={() => countDispatcher(createActionDecrement())}
      >
        Dec
      </button>
    </div>
  );
}

export default ReducerComponent;
