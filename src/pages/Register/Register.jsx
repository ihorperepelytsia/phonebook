import React from 'react';
import { useDispatch } from 'react-redux';
import { FaRegIdCard } from 'react-icons/fa';
import { register } from 'redux/auth/auth-operations';
import {
  Links,
  Form,
  Input,
  Label,
  Button,
  Span,
  Div,
} from 'pages/Login/Login.styled';
import { Container, Text } from 'pages/AuthNav/AuthNav.styled';

export const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
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
    <Container>
      <Text>Sign Up</Text>
      <Form onSubmit={handleSubmit}>
        <Label>Name </Label>
        <Input type="text" name="name" placeholder="  Name" />

        <Label>Email </Label>
        <Input type="email" name="email" placeholder="  Email" />
        <Label>Password </Label>
        <Input type="password" name="password" placeholder="  Password" />

        <Button type="submit">
          <FaRegIdCard />
          <span>Create acount</span>
        </Button>
      </Form>
      <Div>
        <Span>Have an account?</Span>
        <Links to="/login"> Log In</Links>
      </Div>
    </Container>
  );
};
