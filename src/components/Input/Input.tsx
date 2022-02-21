import React from "react";
import style from "../calculator/Calculator.module.css";

interface Props {
  text: string;
  name: string;
  id: string;
  valueCurently: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ text, name, id, handleInput, valueCurently }: Props) {
  return (
    <div className={`${style.inputContainer} ${style.ic1}`}>
      <input
        id={`${id}`}
        type="text"
        className={style.input}
        placeholder="Value"
        name={`${name}`}
        value={valueCurently}
        onChange={handleInput}
      />
      <div className={style.cut}></div>
      <label htmlFor={`${id}`} className={style.placeholder}>
        {text}
      </label>
    </div>
  );
}

export default Input;
