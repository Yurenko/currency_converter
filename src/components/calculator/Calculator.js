import Input from "../Input/Input";
import Select from "../Select/Select";
import style from "./Calculator.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  inputThunk,
  selectThunk,
} from "../../redux/CalculatorReducer/CalculatorThunk";
import { getCalculator } from "../../redux/CalculatorReducer/CalculatorSelectors";
import doubleArrow from "../../assets/img/double-arrow.png";

function Calculator() {
  const dispatch = useDispatch();

  const { fromCurently, toCurently, fromCurentlyValue, toCurentlyValue } =
    useSelector(getCalculator);

  const handleSelect = (e) => {
    const { name, value } = e.target;
    dispatch(selectThunk(name, value));
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    dispatch(inputThunk(name, value, fromCurently, toCurently));
  };

  return (
    <div className={style.calculatorWrapper}>
      <div className={style.title}>Welcome</div>
      <div className={style.subtitle}>Enter the number!</div>
      <div className={style.form}>
        <div className={style.item}>
          <Input
            text="From"
            id="firstValue"
            handleInput={handleInput}
            valueCurently={fromCurentlyValue}
            name="firstValue"
          />
          <Select handleSelect={handleSelect} name="fromCurently" />
        </div>
        <img src={doubleArrow} alt="arrows" className={style.doubleArrow} />
        <div className={style.item}>
          <Input
            text="To"
            id="secondValue"
            handleInput={handleInput}
            valueCurently={toCurentlyValue}
            name="secondValue"
          />
          <Select handleSelect={handleSelect} name="toCurently" />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
