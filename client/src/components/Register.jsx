import React, { useState } from "react";
import axios from "axios";
import { useSignIn } from "react-auth-kit";

function Register() {
    const signIn = useSignIn();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const register = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("/api/register", { email, password });
            // Insert JWT (res.data.token)
            if(!signIn({token: res.data.token, expiresIn: 7200, remember: true})) {
                setError("Sign-in failed. Please try again.");
            }
        } catch (err) {
            console.error(err.response.data.error);
            setError(err.response.data.error || "Registration failed");
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