import { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { currentTarget } = event;

    const form = new FormData(currentTarget);

    try {
      const response = await fetch("api/signin", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.get("email"),
          password: form.get("password"),
        }),
      });

      if (!response.ok) {
        await Promise.reject(new Error(response.statusText));
      }

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const signUpHandler = () => {
    navigate("/sign-up");
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>Log In</h1>
      <input name="email" type="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Log In</button>
      <button type="button" onClick={signUpHandler}>
        Sign Up
      </button>
      <Link to="/reset-password">Forgot Password</Link>
    </form>
  );
};

export default SignIn;
