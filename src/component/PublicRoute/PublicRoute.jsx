import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return <>{isLoggedIn ? <Navigate to="/contacts" /> : children}</>;
};

PublicRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
export default PublicRoute;
