import { useState } from "react";
import * as styles from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button className={styles.btn} onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};
