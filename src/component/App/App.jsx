import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';
import { Contacts } from 'pages/Contacst/Contacts';
import { AuthNav } from 'pages/AuthNav/AuthNav';
import { Nav } from 'component/Nav/Nav';
import { PrivateRoute } from 'component/PrivateRoute/PrivateRoute';
import { PublicRoute } from 'component/PublicRoute/PublicRoute';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import { getIsFetching } from 'redux/auth/auth-selectors';

export const App = () => {
  const isFetching = useSelector(getIsFetching);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isFetching && (
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route
              index
              element={
                <PublicRoute>
                  <AuthNav />
                </PublicRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      )}

      <ToastContainer />
    </>
  );
};
