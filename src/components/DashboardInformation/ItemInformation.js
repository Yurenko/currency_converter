import style from "./ItemInformation.module.css";

function ItemInformation({ item }) {
  return (
    <div className={style.list}>
      {item[0]}: {Math.floor(item[1] * 100) / 100}
    </div>
  );
}

export default ItemInformation;
