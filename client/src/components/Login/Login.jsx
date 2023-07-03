import React, { useState } from "react";
import axios from "axios";
import { useUser } from "../UserProvider";
import "./Login.css";

function Login({ handleModeChange }) {
  const { setUser } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const login = async (e) => {
    e.preventDefault();

    if (!email.endsWith("@galvanize.com")) {
      setErrorMsg("Email must end with @galvanize.com");
      return;
    }

    try {
      const res = await axios.post("/api/login", { email, password });
      // Insert JWT (res.data.token)
      localStorage.setItem("token", res.data.token);
      // const decodedToken = jwtDecode(res.data.token);
      setUser(res.data.user);
    } catch (err) {
      console.error(err);
      setErrorMsg("Incorrect username or password");
    }
  };

  return (
    <div>
      <h2 className="form-title">Welcome Staff!</h2>
      <form className="login-form" onSubmit={login}>
      {errorMsg && (
          <p  style={{ textAlign: "center", color: 'red' }} id="request-error-msg" className="error text-center">
            {errorMsg}
          </p>
        )}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
        />
        <button type="submit">Login</button>
        <p style={{ textAlign: "center" }}>
        Are you a new user?
         Click {" "}
        <a href="#" onClick={(event) => handleModeChange(event, "register")}>
          here
        </a>
        {''} to register.
      </p>
      </form>
    </div>
  );
}

export default Login;
