import { Dispatch, FormEvent, SetStateAction } from "react";
import { Todo } from "../../types";

type Props = {
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

function Creator({ setTodos }: Props) {
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const val = form.get("text");
    const text = val && !(val instanceof File) ? val : "";

    setTodos((list) => [
      { id: crypto.randomUUID(), text, done: false },
      ...list,
    ]);
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="text" />
      <button type="submit">Add</button>
    </form>
  );
}

export default Creator;
