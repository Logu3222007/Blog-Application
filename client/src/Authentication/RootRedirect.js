import React from "react";
import { Navigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const RootRedirect = () => {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const decodedToken = jwtDecode(token);

      // Optionally, check token expiration
      if (decodedToken.exp * 1000 > Date.now()) {
        // Redirect based on user role
        const userRole = decodedToken.role;
        if (userRole === "author") {
          return <Navigate to="/author" />;
        } else if (userRole === "regular") {
          return <Navigate to="/regular" />;
        }
      }
    } catch (error) {
      console.error("Invalid token:", error);
      // If the token is invalid, clear it from localStorage
      localStorage.removeItem("token");
    }
  }

  return <Navigate to="/login" />; // Default to login if not authenticated
};

export default RootRedirect;
