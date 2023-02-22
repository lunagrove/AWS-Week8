import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {signUp} from './cognito.js'

function PageSignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [username, setUserName] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (password !== confirmPassword) {
            setMessage("Passwords do not match")
            return
        }
    
        setMessage("")
    
        try {
            await signUp({ username, email, password })
            navigate(`/signup/confirm/${username}`);
        } catch (error) {
            console.error(error)
            setMessage("Error signing up")
        }
          
    };

    return (
        <main>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label className="form-label" htmlFor="username">User name:</label>
                <input 
                  type="text" 
                  className="display-name" 
                  id="username" 
                  name="username" 
                  value={username} 
                  required
                  onChange={(event) => setUserName(event.target.value)}
                />
                <label className="form-label" htmlFor="email">Email:</label>
                <input
                  type="email" 
                  id="email" 
                  name="email" 
                  value={email} 
                  required
                  onChange={(event) => setEmail(event.target.value)}
                /> 
                <label className="form-label" htmlFor="password">Password:</label>
                <input
                  type="password" 
                  className="password" 
                  id="password"   
                  name="password" 
                  value={password} 
                  required
                  onChange={(event) => setPassword(event.target.value)}
                />
                <label className="form-label" htmlFor="confirmPassword">Confirm Password:</label>
                <input
                  type="password" 
                  className="password" 
                  id="confirmPassword"   
                  name="confirmPassword" 
                  value={confirmPassword} 
                  required
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
                <button type="submit" >Sign Up</button> 
            </form>
            <p className="error-message">{message}</p>
            <div>
                <a href="/login">Log In</a>
                <a href="/reset"><p>Forgot password</p></a>
            </div>
        </main>
    );
}

export default PageSignUp;