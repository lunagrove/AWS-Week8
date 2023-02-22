import {signOut} from './cognito.js'
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "./AuthContext.js";

function PageLogout() {

    const {updateUser} = useContext(AuthContext);

    useEffect(() => {
        try {
            signOut();
        }
        catch (error) {
            console.error(error);
        }
        updateUser(null);
      }, []);
    
    return (
        <div className="logged-out">
            <h2>Goodbye</h2>
            <h2>You have been logged out.</h2>
        </div>
    )
}

export default PageLogout;