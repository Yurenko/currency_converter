import {
  SET_CURENTCY_DATE,
  SET_CURRENTCY,
  SET_CURENTCY_CURRENCY,
} from "./DashboardActions";

const initialState = {
  curentlyDate: "",
  curentlyCurrency: "USD",
  currency: {},
};

export const DashboardInformationReduser = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case SET_CURENTCY_DATE:
      return { ...state, curentlyDate: payload };
    case SET_CURENTCY_CURRENCY:
      return { ...state, curentlyCurrency: payload.toUpperCase() };
    case SET_CURRENTCY:
      return { ...state, currency: { ...payload } };
    default:
      return state;
  }
};
