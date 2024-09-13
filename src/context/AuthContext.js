import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({ isLoggedIn: false, role: '' });

  const login = (role) => {
    setAuth({ isLoggedIn: true, role });
  };

  const logout = () => {
    setAuth({ isLoggedIn: false, role: '' });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
