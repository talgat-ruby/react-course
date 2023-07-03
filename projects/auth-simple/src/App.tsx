import { useState } from "react";
import Home from "../components/Home";
import ResetPassword from "../components/ResetPassword";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import "./App.css";

function App() {
  const [page, setPage] = useState("ResetPassword");

  switch (page) {
    case "Home":
      return <Home />;
    case "ResetPassword":
      return <ResetPassword />;
    case "SignUp":
      return <SignUp setPage={setPage} />;
    case "Login":
    default:
      return <SignIn setPage={setPage} />;
  }
}

export default App;
