import React from "react";
import style from "./ItemInformation.module.css";

interface Props {
  item: Array<string>;
}

function ItemInformation({ item }: Props) {
  return (
    <div className={style.list}>
      {item[0]}: {Math.floor(Number(item[1]) * 100) / 100}
    </div>
  );
}

export default ItemInformation;
