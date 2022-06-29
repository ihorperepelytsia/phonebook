import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return <>{isLoggedIn ? <Navigate to="/contacts" /> : children}</>;
};

PublicRoute.propTypes = {
  children: PropTypes.element.isRequired,
};


