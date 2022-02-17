export const SET_CURENTCY_DATE = "SET_CURENTCY_DATE";
export const SET_CURENTCY_CURRENCY = "SET_CURENTCY_CURRENCY";
export const SET_CURRENTCY = "SET_CURRENTCY";

export const setCurentlyDate = (value) => {
  return { type: SET_CURENTCY_DATE, payload: value };
};

export const setCurentlyCurrency = (value) => {
  return { type: SET_CURENTCY_CURRENCY, payload: value };
};

export const setCurrency = (value) => {
  return { type: SET_CURRENTCY, payload: value };
};
