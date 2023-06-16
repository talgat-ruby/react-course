import {useState} from "react";

// eslint-disable-next-line react/prop-types
function Display({ num1, num2, setNum1, setNum2, operator }) {
  const [result, setResult] = useState(0);

  console.log("result", result);

  const value = !operator ? num1 : num2;
  const changeHanlder = (event) =>
    !operator
      ? setNum1(event.target.valueAsNumber)
      : setNum2(event.target.valueAsNumber);

  const handleKeyDown = (event) => {
    if (event.which === 13) {
      switch (operator) {
        case "+":
          {
            setResult(num1 + num2);
          }
          break;
        case "-":
          {
            setResult(num1 - num2);
          }
          break;
        case "*":
          {
            setResult(num1 * num2);
          }
          break;
        case "/": {
          setResult(num1 / num2);
        }
      }
    }
  };

  return (
    <input
      type="number"
      value={result || value}
      onChange={changeHanlder}
      onKeyUp={handleKeyDown}
    />
  );
}

export default Display;
