import { useContext } from "react";
import { AuthContext } from "./AuthContext.js";
import { Navigate, useLocation } from "react-router-dom";

export default function AuthRoute({children}) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <></>
  }

  if (!user) {
    return <Navigate to={{ pathname: "/login", state: { from: location }}} />
  }

  return children
}