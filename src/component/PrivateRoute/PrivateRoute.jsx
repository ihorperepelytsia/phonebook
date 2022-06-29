import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return <>{isLoggedIn ? children : <Navigate to="/login" />}</>;
};
PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
export default PrivateRoute;
