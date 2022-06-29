import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/auth-operations";

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameValue = e.currentTarget.elements.name.value;
    const emailValue = e.currentTarget.elements.email.value;
    const passwordValue = e.currentTarget.elements.password.value;
    console.log(nameValue);
    console.log(emailValue);
    console.log(passwordValue);
    console.log(dispatch);
    dispatch(
      register({ name: nameValue, email: emailValue, password: passwordValue })
    );
    e.currentTarget.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="password" />
      <button>Sign Up</button>
    </form>
  );
};
export default Register;
