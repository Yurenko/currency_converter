import style from "./Button.module.css";
function Button({ item, handleCurrencyByDate }) {
  return (
    <button
      className={style.button}
      onClick={handleCurrencyByDate}
      type="button"
      value={item}
    >
      {item}
    </button>
  );
}

export default Button;
