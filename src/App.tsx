import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./App.module.css";
import Calculator from "./components/calculator/Calculator";
import DashboardInformation from "./components/DashboardInformation/DashboardInformation";
import Loader from "./components/Loader/Loader";
import { getAppLoading } from "./redux/App/AppSelectors";
import { fetchAppThunk } from "./redux/App/AppThunk";

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector(getAppLoading);

  useEffect(() => {
    dispatch(fetchAppThunk());
  }, []);

  return (
    <div className={style.wrapper}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Calculator />
          <DashboardInformation />
        </>
      )}
    </div>
  );
}

export default App;
