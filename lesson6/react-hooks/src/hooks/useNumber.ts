import { useCallback, useEffect, useState } from "react";

function useNumber(initialNumber: number) {
  const [num, setNum] = useState(initialNumber);

  useEffect(() => {
    setNum(initialNumber);
  }, [initialNumber]);

  const increment = useCallback(() => {
    setNum((prevNum) => prevNum + 1);
  }, []);

  const decrement = () => {
    setNum((prevNum) => prevNum - 1);
  };

  return { num, increment, decrement };
}

function sum(a: number, b: number) {
  return a + b;
}

sum(1, 2); // 3
sum(1, 2);
sum(1, 2);
sum(1, 2);
sum(1, 2);

export default useNumber;
