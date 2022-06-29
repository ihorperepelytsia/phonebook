import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/auth-operations";

const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValue = e.currentTarget.elements.email.value;
    const passwordValue = e.currentTarget.elements.password.value;
    dispatch(login({ email: emailValue, password: passwordValue }));
    e.currentTarget.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="password" />
      <button>Log in</button>
    </form>
  );
};
export default Login;
