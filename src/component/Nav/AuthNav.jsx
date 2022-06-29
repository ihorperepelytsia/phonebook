import React from "react";
import { Link } from "./Nav.styled";

const AuthNav = () => {
  return (
    <>
      <Link to="/login">login</Link>
      <Link to="/register">Register</Link>
    </>
  );
};

export default AuthNav;
