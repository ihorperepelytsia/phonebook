import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Register from "../../pages/Register";
import Login from "../../pages/Login";
import Contacts from "../../pages/Contacts";
import Nav from "../Nav/Nav";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicRoute from "../PublicRoute/PublicRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { fetchCurrentUser } from "../../redux/auth/auth-operations";
import authSelectors from "../../redux/auth/auth-selectors";

const App = () => {
  const isFetching = useSelector(authSelectors.getIsFetching);
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

export default App;
