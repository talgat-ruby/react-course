// eslint-disable-next-line react/prop-types
function List({ todos = [] }) {
  return (
    <section>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input type="checkbox" checked={todo.done} onChange={() => null} />
            <p>{todo.text}</p>
            <button>Edit</button>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default List;
