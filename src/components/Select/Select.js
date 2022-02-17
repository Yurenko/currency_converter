import style from "../calculator/Calculator.module.css";
import data from "../../currency.json";

function Select({ handleSelect, name }) {
  return (
    <select name={`${name}`} className={style.select} onChange={handleSelect}>
      {Object.entries(data).map((item) => (
        <option key={item} value={item[0]}>
          {item[0].toUpperCase()} {item[1]}
        </option>
      ))}
    </select>
  );
}

export default Select;
