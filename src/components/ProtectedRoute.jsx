import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, setShowAuthModal, setRedirectPath } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (!user) {
      setRedirectPath(location.pathname);
      setShowAuthModal(true);
    }
  }, [user, location, setShowAuthModal, setRedirectPath]);

  return user ? children : null;
};

export default ProtectedRoute;
