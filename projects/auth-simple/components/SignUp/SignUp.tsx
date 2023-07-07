import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { currentTarget } = event;

    const form = new FormData(currentTarget);

    try {
      const response = await fetch("api/signup", {
        method: "POST",
        body: JSON.stringify({
          email: form.get("email"),
          password: form.get("password"),
        }),
      });

      if (!response.ok) {
        await Promise.reject(new Error(response.statusText));
      }

      navigate("/sign-in");
    } catch (err) {
      console.log(err);
    }
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
