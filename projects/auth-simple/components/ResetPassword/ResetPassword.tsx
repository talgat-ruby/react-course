import { FormEvent } from "react";

const ResetPassword = () => {
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { currentTarget } = event;

    const form = new FormData(currentTarget);

    console.log(form.get("email"));
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>Reset Password</h1>
      <input name="email" type="email" placeholder="Email" />
      <button type="submit">Request Reset</button>
    </form>
  );
};

export default ResetPassword;
