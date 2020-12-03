export const ACTION_INCREMENT = "INCREMENT";
export const ACTION_DECREMENT = "DECREMENT";
export const ACTION_ADD_NUMBER = "ADD_NUMBER";
export const ACTION_MINUS_NUMBER = "MINUS_NUMBER";
export const ACTION_RESET = "RESET";

export const createActionIncrement = () => ({ type: ACTION_INCREMENT });
export const createActionDecrement = () => ({ type: ACTION_DECREMENT });
export const createActionReset = () => ({ type: ACTION_RESET });
export const createActionAddNumber = (value) => ({
  type: ACTION_ADD_NUMBER,
  value,
});
export const createActionMinusNumber = (value) => ({
  type: ACTION_MINUS_NUMBER,
  value,
});
