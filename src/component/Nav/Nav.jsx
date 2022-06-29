import React from "react";
import { Header } from "./Nav.styled";
import { Outlet } from "react-router-dom";
import AuthNav from "./AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
const Nav = () => {
  const isLogin = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <Header>{isLogin ? <UserMenu /> : <AuthNav />}</Header>

      <Outlet />
    </>
  );
};

export default Nav;
