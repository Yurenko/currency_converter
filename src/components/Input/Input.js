import style from "../calculator/Calculator.module.css";

function Input({ text, name, id, handleInput, valueCurently }) {
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
