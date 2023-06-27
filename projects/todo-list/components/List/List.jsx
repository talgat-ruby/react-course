// eslint-disable-next-line react/prop-types
function List({ todos = [], setTodos }) {
  const changeHandler = ({ currentTarget }) => {
    const { dataset } = currentTarget;
    const ind = Number(dataset.index);

    setTodos((prevTodos) => [
      ...prevTodos.slice(0, ind),
      { ...prevTodos[ind], done: !prevTodos[ind].done },
      ...prevTodos.slice(ind + 1),
    ]);
  };

  const deleteHandler = ({ currentTarget }) => {
    const { dataset } = currentTarget;
    const ind = Number(dataset.index);

    setTodos((prevTodos) => prevTodos.filter((todo, index) => index !== ind));
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
