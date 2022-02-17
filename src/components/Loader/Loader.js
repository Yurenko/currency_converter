import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.body}>
      <div className={styles.loader}></div>
    </div>
  );
}

export default Loader;

export function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}
