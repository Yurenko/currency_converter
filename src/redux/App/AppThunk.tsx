import { demoAsyncCall } from "../../components/Loader/Loader";
import { AppDispatch, RootState } from "../store";
import { setLoading } from "./AppActions";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

export const fetchAppThunk =
  (): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch: AppDispatch) => {
    try {
      await demoAsyncCall().then(() => dispatch(setLoading(false)));
    } catch (error) {
      alert(error);
    }
  };
