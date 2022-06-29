import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "../Nav/Nav.styled";
import authSelectors from "../../redux/auth/auth-selectors";
import { logOut } from "../../redux/auth/auth-operations";
const UserMenu = () => {
  const userName = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  return (
    <>
      <Link to="/contacts">Contacts</Link>
      <span>Hello : {userName}</span>
      <button onClick={() => dispatch(logOut())}>Log out</button>
    </>
  );
};

export default UserMenu;
