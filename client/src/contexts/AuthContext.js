
import React, { createContext, useContext, useState, useEffect} from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [ auth, setAuth ] = useState(false)
  let local = JSON.parse(localStorage.getItem("auth"))
  
  useEffect(() =>{
    local = JSON.parse(localStorage.getItem("auth"))
    if(local === true) setAuth(true)

  }, [local])

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthAccess = () => useContext(AuthContext);



