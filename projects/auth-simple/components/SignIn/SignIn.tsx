import { Dispatch, FormEvent, SetStateAction } from "react";

type Props = {
  setPage: Dispatch<SetStateAction<string>>;
};

const SignIn = ({ setPage }: Props) => {
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { currentTarget } = event;

    const form = new FormData(currentTarget);

    console.log(form.get("email"));
    console.log(form.get("password"));
  };

  const signUpHandler = () => {
    setPage("SignUp");
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
      <a href="#">Forgot Password</a>
    </form>
  );
};

export default SignIn;
