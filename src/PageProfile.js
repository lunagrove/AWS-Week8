import { useState } from "react";

export default function PageProfile() {

//  const { user, token, updateToken } = useContext(AuthContext);
//  const [displayName, setDisplayName] = useState(user.userdisplay);
  const [message, setMessage] = useState("");

//  console.log("User", user);
//  const userid = user.userid;

  let inputOk = true;

  const onSubmit = async (e) => {
    e.preventDefault();

    /* try {
      const result = await fetch("/api/user/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userid, displayName }),
      });

      const data = await result.json();

      if (data.status === "ok") {
        const token = data.accessToken;
        console.log("token", token);

        updateToken(token);
        setDisplayName(data.newName);
        setMessage(data.message);
      }
      else
      {
        if (data.status === "error") {
          setMessage(data.message);
          inputOk = false;
        }
      }
    }
    catch (error) {
        console.log(error);
        setMessage("Error occurred");
        inputOk = false;
      }; */
  }; 

  return (
    <div>
      <div className="container">
        {/* <h1>Profile: {user ? user.userdisplay : ""}</h1> */}
        <div className="image-circle">
          <p>No image selected</p>
        </div>
      </div>
      {/* <p className="email-text">Email: {user ? user.username : ""}</p> */}
      {/* <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="displayName">Display Name</label>
          <input
            type="text"
            className="display-name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>
        <button type="submit">Update</button>
      </form> */}
      {inputOk ? (
        <p className="error-message2">{message}</p>
      ) : (
        <p className="error-message">{message}</p>
      )}
    </div>
  );
}