import { demoAsyncCall } from "../../components/Loader/Loader";
import { setLoading } from "./AppActions";

export const fetchAppThunk = () => async (dispatch) => {
  try {
    await demoAsyncCall().then(() => dispatch(setLoading(false)));
  } catch (error) {
    alert(error);
  }
};
