import React from "react";
import { useEffect } from "react";
import Calculator from "./components/calculator/Calculator";
import DashboardInformation from "./components/DashboardInformation/DashboardInformation";
import Loader from "./components/Loader/Loader";
import { getAppLoading } from "./redux/App/AppSelectors";
import { fetchAppThunk } from "./redux/App/AppThunk";
import style from "./App.module.css";
import { useAppDispatch, UseAppSelector } from "./hook/reduxHook";

function App() {
  const dispatch = useAppDispatch();
  const { loading } = UseAppSelector(getAppLoading);

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
