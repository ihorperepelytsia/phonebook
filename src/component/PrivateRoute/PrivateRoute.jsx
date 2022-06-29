import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {getIsLoggedIn} from 'redux/auth/auth-selectors';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return <>{isLoggedIn ? children : <Navigate to="/login" />}</>;
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};


