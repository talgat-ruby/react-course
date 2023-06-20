import { useState } from "react";
import Creator from "../components/Creator/index.js";
import List from "../components/List/index.js";
import "./App.css";

const initialList = [
  { text: "Todo 1", done: false },
  { text: "Todo 2", done: true },
  { text: "Todo 3", done: false },
];

function App() {
  const [list, setList] = useState(initialList);

  return (
    <>
      <Creator setTodos={setList} />
      <List todos={list} />
    </>
  );
}

export default App;
