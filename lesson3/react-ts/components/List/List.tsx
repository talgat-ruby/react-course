import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import type { Todo } from "../../types/";

type Props = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

function List({ todos = [], setTodos }: Props) {
  const changeHandler = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    const { dataset } = currentTarget;
    const ind = Number(dataset.index);

    setTodos((prevTodos) => [
      ...prevTodos.slice(0, ind),
      { ...prevTodos[ind], done: !prevTodos[ind].done },
      ...prevTodos.slice(ind + 1),
    ]);
  };

  const deleteHandler = ({ currentTarget }: MouseEvent<HTMLButtonElement>) => {
    const { dataset } = currentTarget;
    const ind = Number(dataset.index);

    setTodos((prevTodos) => prevTodos.filter((_, index) => index !== ind));
  };

  return (
    <section>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <input
              data-index={index}
              type="checkbox"
              checked={todo.done}
              onChange={changeHandler}
            />
            <p>{todo.text}</p>
            <button data-index={index} onClick={deleteHandler}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default List;
