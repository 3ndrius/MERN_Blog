
import React, { createContext, useContext, useState} from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [ auth, setAuth ] = useState(JSON.parse(localStorage.getItem("auth")) ? true : false)
 
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthAccess = () => useContext(AuthContext);



