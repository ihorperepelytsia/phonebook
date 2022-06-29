import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ImExit } from 'react-icons/im';
import { MdAccountCircle } from 'react-icons/md';
import { getUsername } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';
import { Div, Button, Span } from './UserMenu.styled';

export const UserMenu = () => {
  const userName = useSelector(getUsername);
  const dispatch = useDispatch();
  return (
    <>
      <Div>
        <Span>
          Welcome, <MdAccountCircle /> {userName}
        </Span>
        <Button onClick={() => dispatch(logOut())}>
          <span>Log out</span>
          <ImExit />
        </Button>
      </Div>
    </>
  );
};
