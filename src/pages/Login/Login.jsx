import React from 'react';
import { useDispatch } from 'react-redux';
import { ImEnter } from 'react-icons/im';
import { login } from 'redux/auth/auth-operations';
import { Container, Text } from 'pages/AuthNav/AuthNav.styled';
import { Links, Form, Input, Label, Button, Span, Div } from './Login.styled';

export const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const emailValue = e.currentTarget.elements.email.value;
    const passwordValue = e.currentTarget.elements.password.value;
    dispatch(login({ email: emailValue, password: passwordValue }));
    e.currentTarget.reset();
  };
  return (
    <Container>
      <Text>Log In</Text>
      <Form onSubmit={handleSubmit}>
        <Label>Email </Label>
        <Input type="email" name="email" placeholder=" Email" />

        <Label>Password </Label>
        <Input type="password" name="password" placeholder=" Password" />

        <Button type="submit">
          <ImEnter />
          <span>Log in</span>
        </Button>
      </Form>
      <Div>
        <Span>Need an account?</Span>
        <Links to="/register"> Sign up now!</Links>
      </Div>
    </Container>
  );
};

