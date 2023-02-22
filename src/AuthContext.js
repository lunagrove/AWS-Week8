import { createContext } from "react";
import { useEffect, useState } from "react";
import {getCurrentUser} from './cognito.js'

export const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(getCurrentUser() || null);

  const updateUser = (user) => {
    setUser(user);
  }

  useEffect(()=> {
    const user = getCurrentUser();
    console.log("AuthContext user", user)
    updateUser(user);
  }, [])

  return (
    <AuthContext.Provider value={{user, updateUser}}>
      {children}
    </AuthContext.Provider>
  )
}