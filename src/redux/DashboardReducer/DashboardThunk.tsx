import {
  setCurrency,
  setCurentlyDate,
} from "../../redux/DashboardReducer/DashboardActions";
import { latestEndpointAPI } from "../../servises/axios/API";
import { AppDispatch } from "../store";

export const inputThunk = (value: string) => (dispatch: AppDispatch) => {
  dispatch(setCurentlyDate(value));
};

export const getCurrencyHistory =
  (date?: string, value?: string) => async (dispatch: AppDispatch) => {
    try {
      const result = await latestEndpointAPI(date, value);
      dispatch(setCurrency(result));
    } catch (error: any) {
      alert(error.message);
    }
  };
