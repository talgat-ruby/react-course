import { useBool } from "../../hooks";

function Main() {
  const { bool, toggle } = useBool(true);

  return (
    <header>
      <h2>Main</h2>
      <span>{bool.toString()}</span>
      <button onClick={toggle}>toggle Main boolean</button>
    </header>
  );
}

export default Main;
