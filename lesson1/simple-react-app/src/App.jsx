import "./App.css";
import { useState } from "react";
import Display from "./Display.jsx";
import Actions from "./Actions.jsx";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("");

  console.log("num1", num1);
  console.log("operator", operator);
  console.log("num2", num2);

  return (
    <>
      <Display
        num1={num1}
        num2={num2}
        setNum1={setNum1}
        setNum2={setNum2}
        operator={operator}
      />
      <Actions setOperator={setOperator} />
    </>
  );
}

export default App;
