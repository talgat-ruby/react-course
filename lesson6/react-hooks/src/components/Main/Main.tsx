import { useCallback, useEffect, useState } from "react";
import { useBool, useNumber } from "../../hooks";

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function Main() {
  const { bool, toggle } = useBool(true);
  const [initialNum, setInitialNum] = useState(6);
  const { num, increment, decrement } = useNumber(initialNum);

  const generateRandomNumber = useCallback(() => {
    const randomInt = getRandomInt(1, 100);
    console.log("randomInt", randomInt);
    setInitialNum(randomInt);
  }, []);

  useEffect(() => {
    console.log("generateRandomNumber", generateRandomNumber);
  }, [generateRandomNumber]);

  return (
    <main>
      <section>
        <h2>Main</h2>
        <span>{bool.toString()}</span>
        <button onClick={toggle}>toggle Main boolean</button>
      </section>

      <section>
        <button onClick={generateRandomNumber}>Generate random number</button>
        <span>{num}</span>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </section>
    </main>
  );
}

export default Main;
