import React from "react";
import style from "./SelectToDate.module.css";
import data from "../../currency.json";

interface Props {
  name: string;
  handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function SelectToDate({ handleSelect, name }: Props) {
  return (
    <select name={`${name}`} className={style.select} onChange={handleSelect}>
      {Object.entries(data).map((item) => (
        <option key={item[0]} value={item[0]}>
          {item[1]}
        </option>
      ))}
    </select>
  );
}

export default SelectToDate;
