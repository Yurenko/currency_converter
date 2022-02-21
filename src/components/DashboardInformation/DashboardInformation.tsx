import React, { useEffect } from "react";
import style from "./DashboardInformation.module.css";
import ItemInformation from "./ItemInformation";
import InputDate from "../Input/InputDate";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrencyHistory,
  inputThunk,
} from "../../redux/DashboardReducer/DashboardThunk";
import {
  setCurentlyCurrency,
  setCurentlyDate,
} from "../../redux/DashboardReducer/DashboardActions";
import { getDashboard } from "../../redux/DashboardReducer/dashboardSelectors";
import Button from "../button/Button";
import elementCurrentValue from "../../utils/elementCurrentValue";

const currencyMarks = ["USD", "EUR", "PLN", "BCH", "DOGE"];

function DashboardInformation() {
  const dispatch = useDispatch();

  const { curentlyDate, curentlyCurrency, currency } =
    useSelector(getDashboard);

  const currentDate = new Date().toISOString().split("T")[0];

  useEffect(() => {
    dispatch(setCurentlyDate(currentDate));
    dispatch(getCurrencyHistory());
  }, []);

  useEffect(() => {
    dispatch(getCurrencyHistory(curentlyDate, curentlyCurrency));
  }, [curentlyDate, curentlyCurrency]);

  let keys = null;
  if (currency.rates) {
    keys = Object.entries(currency.rates);
  } else {
    keys = Array(200).fill(["Undefined", "Undefined"]);
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(inputThunk(value));
  };

  const handleCurrencyByDate = (value: string) => {
    dispatch(setCurentlyCurrency(value));
  };

  return (
    <div className={style.leftSide}>
      <div className={style.desk}>
        <div className={style.dateCurrency}>
          <div className={style.buttonCurrency}>
            {currencyMarks.map((item) => (
              <Button
                key={item}
                item={item}
                handleCurrencyByDate={handleCurrencyByDate}
              />
            ))}
          </div>

          <InputDate
            id="dateCurrency"
            name="dateCurrency"
            value={curentlyDate}
            handleInput={handleInput}
          />
        </div>
        <div className={style.titleCurency}>
          {elementCurrentValue(curentlyCurrency)}
        </div>
        {keys.map((item, index) => (
          <ItemInformation key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default DashboardInformation;
