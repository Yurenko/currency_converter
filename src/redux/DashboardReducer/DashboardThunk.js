import {
  setCurrency,
  setCurentlyDate,
} from "../../redux/DashboardReducer/DashboardActions";
import { latestEndpointAPI } from "../../servises/axios/API";

export const inputThunk = (value) => (dispatch) => {
  dispatch(setCurentlyDate(value));
};

export const getCurrencyHistory = (date, value) => async (dispatch) => {
  try {
    const result = await latestEndpointAPI(date, value);
    dispatch(setCurrency(result));
  } catch (error) {
    alert(error.message);
  }
};
