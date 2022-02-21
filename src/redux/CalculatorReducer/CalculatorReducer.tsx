import {
  SET_FROM_CURENTLY,
  SET_FROM_CURENTLY_VALUE,
  SET_TO_CURENTLY,
  SET_TO_CURENTLY_VALUE,
} from "./CalculatorActions";

interface CalculatorState {
  fromCurently: string;
  toCurently: string;
  fromCurentlyValue: number;
  toCurentlyValue: number;
}

const initialState: CalculatorState = {
  fromCurently: "ADA",
  toCurently: "ADA",
  fromCurentlyValue: 0,
  toCurentlyValue: 0,
};

export const CalculatorReducer = (
  state = initialState,
  { type, payload }: any
) => {
  switch (type) {
    case SET_FROM_CURENTLY:
      return { ...state, fromCurently: payload.toUpperCase() };
    case SET_TO_CURENTLY:
      return { ...state, toCurently: payload.toUpperCase() };
    case SET_FROM_CURENTLY_VALUE:
      return { ...state, fromCurentlyValue: payload };
    case SET_TO_CURENTLY_VALUE:
      return { ...state, toCurentlyValue: payload };

    default:
      return state;
  }
};
