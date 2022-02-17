import style from "./SelectToDate.module.css";
import data from "../../currency.json";

function SelectToDate({ handleSelect, name }) {
  return (
    <select name={`${name}`} className={style.select} onChange={handleSelect}>
      {Object.entries(data).map((item) => (
        <option key={item} value={item[0]}>
          {item[1]}
        </option>
      ))}
    </select>
  );
}

export default SelectToDate;
