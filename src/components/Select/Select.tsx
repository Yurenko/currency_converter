import React from "react";
import style from "../calculator/Calculator.module.css";
import data from "../../currency.json";

interface Props {
  name: string;
  handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function Select({ handleSelect, name }: Props) {
  return (
    <select name={`${name}`} className={style.select} onChange={handleSelect}>
      {Object.entries(data).map((item) => (
        <option key={item[0]} value={item[0]}>
          {item[0].toUpperCase()} {item[1]}
        </option>
      ))}
    </select>
  );
}

export default Select;
