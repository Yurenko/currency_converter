export const SET_FROM_CURENTLY = "SET_FROM_CURENTLY";
export const SET_TO_CURENTLY = "SET_TO_CURENTLY";
export const SET_FROM_CURENTLY_VALUE = "SET_FROM_CURENTLY_VALUE";
export const SET_TO_CURENTLY_VALUE = "SET_TO_CURENTLY_VALUE";

export const setFromCurently = (value) => {
  return { type: SET_FROM_CURENTLY, payload: value };
};

export const setToCurently = (value) => {
  return { type: SET_TO_CURENTLY, payload: value };
};

export const setFromCurentlyValue = (value) => {
  return { type: SET_FROM_CURENTLY_VALUE, payload: value };
};

export const setToCurentlyValue = (value) => {
  return { type: SET_TO_CURENTLY_VALUE, payload: value };
};
