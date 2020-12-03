import { func } from "prop-types";
import React from "react";
import { connect } from "react-redux";
import {
  createActionIncrement,
  createActionDecrement,
  createActionReset,
  createActionMinusNumber,
  createActionAddNumber,
} from "../../redux/actions/counter";

function ReduxComponent(props) {
  return (
    <div>
      <h2>Counter Redux {props.counter}</h2>
      <hr />
      <button className="btn btn-primary" onClick={() => props.onInc()}>
        Inc
      </button>
      <button className="btn btn-info" onClick={() => props.onReset()}>
        RESET
      </button>
      <button className="btn btn-info" onClick={() => props.onAdd(10)}>
        +10
      </button>
      <button className="btn btn-info" onClick={() => props.onAdd(100)}>
        +100
      </button>
      <button className="btn btn-info" onClick={() => props.onMinus(10)}>
        -10
      </button>

      <button className="btn btn-info" onClick={() => props.onMinus(100)}>
        -100
      </button>
      <button className="btn btn-danger" onClick={() => props.onDec()}>
        Dec
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInc: () => dispatch(createActionIncrement()),
    onDec: () => dispatch(createActionDecrement()),
    onReset: () => dispatch(createActionReset()),
    onAdd: (value) => dispatch(createActionAddNumber(value)),
    onMinus: (value) => dispatch(createActionMinusNumber(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxComponent);
