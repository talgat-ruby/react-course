// eslint-disable-next-line react/prop-types
function Creator({ setTodos }) {
  const submitHandler = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    setTodos((list) => [
      { id: crypto.randomUUID(), text: form.get("text"), done: false },
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
