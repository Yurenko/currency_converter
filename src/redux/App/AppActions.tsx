export const SET_LOADING = "SET_LOADING";

export const setLoading = (value: boolean) => {
  return { type: SET_LOADING, payload: value };
};
