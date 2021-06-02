import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./login.css";

export default function LoginUser() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [errorMsg, setErrorMessage] = useState("");
  const history = useHistory();

  useEffect(() => {
    window.localStorage.setItem("loggedUser", "");
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(userEmail);
    try {
      const user = await axios.post("/api/login/", {
        userEmail,
        password,
      });
      window.localStorage.setItem("loggedUser", JSON.stringify(user));
      setUser(user);
      setUserEmail("");
      setPassword("");
      history.push("/home");
    } catch (error) {
      setErrorMessage("Wrong credentials");
      console.log(errorMsg);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };
  return (
    <div id="loginform">
      <form id="observationform" onSubmit={handleLogin}>
        <div className="form-input">
          Email
          <input
            type="text"
            value={userEmail}
            name="Email"
            onChange={({ target }) => setUserEmail(target.value)}
          />
        </div>
        <div className="form-input">
          Password
          <input
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>

        <button id="login_in" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
