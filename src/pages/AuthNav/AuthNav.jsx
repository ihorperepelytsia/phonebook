import React from 'react';
import { Links, Container, Text } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <>
      <Container>
        <Text>Welcome to the PhoneBook App</Text>
        <div>
          <Links to="/login">log In</Links>

          <Links to="/register">Sign Up</Links>
        </div>
      </Container>
    </>
  );
};

