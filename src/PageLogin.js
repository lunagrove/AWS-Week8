import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {signIn, getCurrentUser} from './cognito.js'
import { AuthContext } from "./AuthContext.js";

function PageLogin() {
  
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const {updateUser} = useContext(AuthContext);

  let inputOk = true;
  const userNameParam = useParams().username;

  useEffect(()=> {
    if (!userNameParam) {
      setMessage("");
    }
    else
    {
      setMessage(`You have been successfully signed up as ${userNameParam}. Please log in.`);
    }
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signIn({ username, password })
      updateUser(getCurrentUser());
      setMessage("");
      navigate("/");
    }
    catch (error) {
      console.error(error)
      inputOk = false;
      setMessage("Error logging in")
    }
  }

  return (
    <main>
      <h1>Log In</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input
          className="email"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          className="password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {inputOk ? (
        <p className="error-message2">{message}</p>
      ) : (
        <p className="error-message">{message}</p>
      )}
      <div>
        <p>Don't have an account?</p>
        <a href="/signup">Sign Up</a>
        <a href="/reset"><p>Forgot password</p></a>
      </div>
    </main>
  );
}

export default PageLogin;