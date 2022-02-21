import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import {
  setFromCurently,
  setFromCurentlyValue,
  setToCurently,
  setToCurentlyValue,
} from "../../redux/CalculatorReducer/CalculatorActions";
import { convertCurentlyAPI } from "../../servises/axios/API";
import { AppDispatch, RootState } from "../store";

export const inputThunk =
  (
    name: string,
    value: string,
    fromCurently: number,
    toCurently: number
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch: AppDispatch) => {
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
    } catch (error: any) {
      alert(error.message);
    }
  };

export const selectThunk =
  (name: string, value: string) => (dispatch: AppDispatch) => {
    if (name === "fromCurently") {
      dispatch(setFromCurently(value));
    } else if (name === "toCurently") {
      dispatch(setToCurently(value));
    }
  };
