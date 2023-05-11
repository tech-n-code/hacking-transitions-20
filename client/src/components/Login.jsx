import React, { useState } from "react";
import axios from "axios";
import { useSignIn } from "react-auth-kit";

function Login() {
    const signIn = useSignIn();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("/api/login", { email, password });
            // Insert JWT (res.data.token)
            if(!signIn({token: res.data.token, expiresIn: 7200, remember: true})) {
                // handle error here, sign in failed
              }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={login}>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;