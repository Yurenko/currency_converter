import style from "./InputSelect.module.css";

function InputDate({ name, id, handleInput, value }) {
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
