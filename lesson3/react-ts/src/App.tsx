import { useState } from "react";
import type { Todo } from "../types/";
import "./App.css";
import List from "../components/List";
import Creator from "../components/Creator";

const initialList: Todo[] = [
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
