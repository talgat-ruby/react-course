import Home from "../components/Home";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import ResetPassword from "../components/ResetPassword";

// fetch http://localhost:8080/api/me - useEffect

function App() {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
