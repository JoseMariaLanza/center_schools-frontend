import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';

import { useSelector } from 'react-redux';
import Layout from '../../presentation/pages/layouts/Layout';
import DashBoard from '../../presentation/pages/DashBoard';
import Home from '../../presentation/pages/Home';

function AppRouter() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/schools" element={<Home />} />
        <Route path="/history" element={<Home />} />
        <Route path="/news" element={<Home />} />
      </Routes>
      <Routes>
        <Route
          path="dashboard"
          element={(
            <ProtectedRoute isLoggedIn={isLoggedIn} isAllowed>
              <DashBoard />
            </ProtectedRoute>
          )}
        />
        <Route
          path="logout"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn} />
          }
        />
        {/* <Route path='*' element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

function ProtectedRoute({
  isLoggedIn, isAllowed, redirectPath, children,
}) {
  if (!isLoggedIn || !isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
}

ProtectedRoute.defaultProps = {
  isLoggedIn: false,
  isAllowed: false,
  redirectPath: '/',
  children: null,
};

ProtectedRoute.propTypes = {
  isLoggedIn: PropTypes.bool,
  isAllowed: PropTypes.bool,
  redirectPath: PropTypes.string,
  children: PropTypes.element,

};

export default AppRouter;
