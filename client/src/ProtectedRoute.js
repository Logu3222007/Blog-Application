// components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

// This component checks if the user is authorized to access a route
const ProtectedRoute = ({ children, allowedRoles }) => {
  const getToken = localStorage.getItem("token");

  if (!getToken) {
    return <Navigate to="/login" />;
  }

  const decodedToken = jwtDecode(getToken);
  const userRole = decodedToken.role;

  // Check if the user's role is allowed to access the route
  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
