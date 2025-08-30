import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [redirectPath, setRedirectPath] = useState("/"); 

  const login = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem("authUser"));

    if (!storedUser) {

      return { success: false, redirect: true };
    }

    if (storedUser.email === email && storedUser.password === password) {
      setUser(storedUser);
      setShowAuthModal(false);
      return { success: true, redirectTo: redirectPath || "/" }; 
    }

    return { success: false, message: "Invalid credentials" };
  };

  const logout = () => setUser(null); 

  const register = (userData) => {
    localStorage.setItem("authUser", JSON.stringify(userData));
    setShowAuthModal(true); 
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        register,
        showAuthModal,
        setShowAuthModal,
        redirectPath,
        setRedirectPath,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
