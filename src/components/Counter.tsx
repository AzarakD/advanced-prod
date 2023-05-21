import { useState } from "react";
import styles from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => ++prev);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button className={styles.btn} onClick={increment}>
        increment
      </button>
    </div>
  );
};
