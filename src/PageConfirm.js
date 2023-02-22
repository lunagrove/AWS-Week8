import { useNavigate, useParams } from "react-router-dom";
import { useState, useContext } from "react";
import {confirmUser} from './cognito.js'
import { AuthContext } from "./AuthContext.js";

function PageConfirm() {
  
  const navigate = useNavigate();

  const userNameParam = useParams().username;

  const [username, setUsername] = useState(userNameParam);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const handleConfirm = async (e) => {
    e.preventDefault();
    try
    {
      await confirmUser({ username, code })
      navigate(`/login/${username}`);
    }
    catch (error)
    {
      console.error(error)
      setMessage("Error confirming email")
    } 
  };

  return (
    <main>
      <h1>Confirm Email</h1>
      <h3>Please verify your email address by entering the code we have just emailed to you:</h3>
      <form onSubmit={handleConfirm}>
        <label className="form-label" htmlFor="username">User name:</label>
        <input 
          type="text" 
          className="display-name" 
          id="username" 
          name="username" 
          value={username} 
          readOnly
          onChange={(event) => setUsername(event.target.value)}
        />
        <label htmlFor="code">Code:</label>
        <input
          className="code"
          type="text"
          name="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
        <button type="submit">Confirm</button>
      </form>
      <p className="error-message">{message}</p>
    </main>
  );
}

export default PageConfirm;