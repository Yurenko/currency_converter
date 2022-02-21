import React from "react";
import style from "./InputSelect.module.css";

interface Props {
  name: string;
  id: string;
  value: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputDate({ name, id, handleInput, value }: Props) {
  return (
    <div className={style.inputSelect}>
      <input
        id={`${id}`}
        className={style.input}
        type="date"
        name={`${name}`}
        value={value}
        onChange={handleInput}
      />
    </div>
  );
}

export default InputDate;
