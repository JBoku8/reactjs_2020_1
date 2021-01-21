export const GET_DATA = "GET_DATA";
export const SET_DATA = "SET_DATA";

export const getData = () => {
  return {
    type: GET_DATA,
  };
};

export const setData = (responseData) => {
  return {
    type: SET_DATA,
    payload: responseData,
  };
};
