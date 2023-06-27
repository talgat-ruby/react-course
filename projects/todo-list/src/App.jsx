import { useState } from "react";
import Creator from "../components/Creator/index.js";
import List from "../components/List/index.js";
import "./App.css";

const initialList = [
  { id: crypto.randomUUID(), text: "Todo 1", done: false },
  { id: crypto.randomUUID(), text: "Todo 2", done: true },
  { id: crypto.randomUUID(), text: "Todo 3", done: false },
];

function App() {
  const [list, setList] = useState(initialList);

  return (
    <>
      <Creator setTodos={setList} />
      <List todos={list} setTodos={setList} />
    </>
  );
}

export default App;
