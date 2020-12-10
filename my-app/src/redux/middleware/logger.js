export default function Logger({ getState, dispatch }) {
  return function (next) {
    return function (action) {
      console.log("[Logger Start]");
      console.log(action.type);
      console.log("[Logger End]");
      next(action);
    };
  };
}
