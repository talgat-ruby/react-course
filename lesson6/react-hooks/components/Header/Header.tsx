import { useBool } from "../../hooks";

function Header() {
  const { bool, toggle } = useBool();

  return (
    <header>
      <h2>Header</h2>
      <span>{bool.toString()}</span>
      <button onClick={toggle}>toggle Header boolean</button>
    </header>
  );
}

export default Header;
