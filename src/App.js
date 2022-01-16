import { useState } from 'react';
import Layout from './Layout';
import Button from './Button';
import styles from "./layout.module.css";

function App() {
  const [value, setValue] = useState(1);
  function calculate(num, type) {
    if (type === "sub") {
      num *= -1;
    }
    else if (type === "mul") {
      num = value;
    }
    setValue(value + num);
  }

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <Layout>
        <h1>구구단 계산기</h1>
        <div className={styles.table}>
          {numbers.map((i) => (
            <p>{value} * {i} = {value * i}</p>
          ))}
        </div>
        <div className={styles['btn-wrap']}>
          <Button onClick={() => calculate(1, "add")} text="+1" />
          <Button onClick={() => calculate(1, "sub")} text="-1" />
          <Button onClick={() => calculate(2, "mul")} text="*2" />
        </div>
      </Layout>
    </div>
  )
}

export default App;