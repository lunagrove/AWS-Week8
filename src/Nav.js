// Nav
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import "./main-nav.css";
import { AuthContext } from "./AuthContext.js";

function Nav() {

  const user = useContext(AuthContext);
  console.log("nav user", user);
  
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {!user ? (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
        </>
        ) : (
        <>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/logout">Log Out</NavLink>
          </li>
        </>
        )}      
      </ul>
    </nav>
  );
};

export default Nav;