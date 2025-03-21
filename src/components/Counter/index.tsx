import { useState } from 'react';
import styles from './index.module.css';
import Button from '../Button';
function Counter() {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount((prev: number) => prev + 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.count}>{count}</div>
      {/* <button onClick={clickHandler}>click</button> */}
      <Button onClick={clickHandler}>Click</Button>
    </div>
  );
}

export default Counter;
