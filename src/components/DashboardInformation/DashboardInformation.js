import { useEffect } from "react";
import style from "./DashboardInformation.module.css";
import ItemInformation from "./ItemInformation";
import InputDate from "../Input/InputDate";
import data from "../../currency.json";
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

  const handleInput = async (e) => {
    const { value } = e.target;
    dispatch(inputThunk(value));
  };

  const handleCurrencyByDate = (event) => {
    const { value } = event.target;

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
                className={style.currencyMarks}
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
          {data[curentlyCurrency.toLowerCase()]}
        </div>
        {keys.map((item, index) => (
          <ItemInformation key={index} currency={currency} item={item} />
        ))}
      </div>
    </div>
  );
}

export default DashboardInformation;
