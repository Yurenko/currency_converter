import {
  setFromCurently,
  setFromCurentlyValue,
  setToCurently,
  setToCurentlyValue,
} from "../../redux/CalculatorReducer/CalculatorActions";
import { convertCurentlyAPI } from "../../servises/axios/API";

export const inputThunk =
  (name, value, fromCurently, toCurently) => async (dispatch) => {
    try {
      if (name === "firstValue") {
        dispatch(setFromCurentlyValue(Number(value)));
        const result = await convertCurentlyAPI(
          fromCurently,
          toCurently,
          Number(value)
        );
        dispatch(setToCurentlyValue(Math.floor(result.result * 100) / 100));
      } else if (name === "secondValue") {
        dispatch(setToCurentlyValue(Number(value)));
        const result = await convertCurentlyAPI(
          toCurently,
          fromCurently,
          Number(value)
        );
        dispatch(setFromCurentlyValue(Math.floor(result.result * 100) / 100));
      }
    } catch (error) {
      alert(error.message);
    }
  };

export const selectThunk = (name, value) => (dispatch) => {
  if (name === "fromCurently") {
    dispatch(setFromCurently(value));
  } else if (name === "toCurently") {
    dispatch(setToCurently(value));
  }
};
