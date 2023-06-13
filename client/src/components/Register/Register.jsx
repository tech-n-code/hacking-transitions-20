import React, { useState } from "react";
import axios from "axios";
import { useUser } from "../UserProvider";
import "./Register.css";

function Register({ handleModeChange }) {
  const { setUser } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState(""); // Add a new state variable called "firstName"
  const [lastName, setLastName] = useState(""); // Add a new state variable called "lastName"
  const [error, setError] = useState(null);

  const register = async (e) => {
    e.preventDefault();

    if (!email.endsWith("@galvanize.com")) {
      alert("You can only register with an approved email");
      return;
    }

    try {
      const res = await axios.post("/api/register", { email, password, firstName, lastName });
      // Insert JWT (res.data.token)
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);
      console.log(res.data.token);
    } catch (err) {
      console.log(err);
      if (err.response && err.response.status === 409) {
        setError("User is already registered, please log in");
      } else {
        setError("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div>
      <h2 className="form-title">First time users register here:</h2>
      <form className="register-form" onSubmit={register}>
      <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} required/>
        <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} required/>
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
        
        <button type="submit">Register</button>
        <button type="button" onClick={() => handleModeChange("login")}>
          Existing User
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Register;
