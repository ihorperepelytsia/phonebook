import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Header, Logo } from './Nav.styled';
import { UserMenu } from 'component/UserMenu/UserMenu';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

export const Nav = () => {
  const isLogin = useSelector(getIsLoggedIn);
  return (
    <>
      <Header>
        <Logo to="/">PhoneBook</Logo>
        {isLogin && <UserMenu />}
      </Header>

      <Outlet />
    </>
  );
};
