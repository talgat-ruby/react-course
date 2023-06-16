function Operations({ setOperator }) {
  return (
    <ul>
      <li>
        <button onClick={() => setOperator("+")}>+</button>
      </li>
      <li>
        <button onClick={() => setOperator("-")}>-</button>
      </li>
      <li>
        <button onClick={() => setOperator("/")}>/</button>
      </li>
      <li>
        <button onClick={() => setOperator("*")}>*</button>
      </li>
    </ul>
  );
}

export default Operations;
