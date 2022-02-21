import {
  SET_CURENTCY_DATE,
  SET_CURRENTCY,
  SET_CURENTCY_CURRENCY,
} from "./DashboardActions";

interface Props {
  curentlyDate: string;
  curentlyCurrency: string;
  currency: object;
}

const initialState: Props = {
  curentlyDate: "",
  curentlyCurrency: "USD",
  currency: {},
};

export const DashboardInformationReduser = (
  state = initialState,
  { type, payload }: any
) => {
  switch (type) {
    case SET_CURENTCY_DATE:
      return { ...state, curentlyDate: payload };
    case SET_CURENTCY_CURRENCY:
      return { ...state, curentlyCurrency: payload };
    case SET_CURRENTCY:
      return { ...state, currency: { ...payload } };
    default:
      return state;
  }
};
