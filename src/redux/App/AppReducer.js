import { SET_LOADING } from "./AppActions";

const initialState = {
  loading: true,
};

export const AppReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
};
