import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
