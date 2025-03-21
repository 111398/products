import { useState } from 'react';
import styles from './index.module.css';
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.count}>{count}</div>
      <button onClick={() => setCount((prev: number) => prev + 1)}>
        click
      </button>
    </div>
  );
}

export default Counter;
