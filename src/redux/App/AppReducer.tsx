import { SET_LOADING } from "./AppActions";

interface LoadingState {
  loading: boolean;
}

const initialState: LoadingState = {
  loading: true,
};

export const AppReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
};
