import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { currentTarget } = event;

    const form = new FormData(currentTarget);

    console.log(form.get("email"));
    console.log(form.get("password"));
  };

  const logInHandler = () => {
    navigate("/sign-in");
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>Sign Up</h1>
      <input name="email" type="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Sign Up</button>
      <button type="button" onClick={logInHandler}>
        Log In
      </button>
    </form>
  );
};

export default SignUp;
