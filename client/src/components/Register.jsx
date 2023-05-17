import React, { useState } from "react";
import axios from "axios";
import { useUser } from "./UserProvider";

function Register() {
    const { setUser } = useUser();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const register = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("/api/register", { email, password });
            // Insert JWT (res.data.token)
            localStorage.setItem('token', res.data.token);
            setUser(res.data.user);
            console.log(res.data.token);
        } catch (err) {
            console.log(err);
            if(err.response && err.response.status === 409) {
                setError("User is already registered, please log in");
            } else {
                setError("Registration failed. Please try again.");
            }
        }
    };

    return (
        <div>
        <form onSubmit={register}>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
            <button type="submit">Register</button>
        </form>
        {error && <p>{error}</p>}
        </div>
    );
}

export default Register;