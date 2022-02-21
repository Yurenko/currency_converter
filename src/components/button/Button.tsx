import React from "react";
import style from "./Button.module.css";

interface Props {
  item: string;
  handleCurrencyByDate: (item: string) => void;
}

function Button({ item, handleCurrencyByDate }: Props) {
  return (
    <button
      className={style.button}
      onClick={() => handleCurrencyByDate(item)}
      type="button"
    >
      {item}
    </button>
  );
}

export default Button;
