import React from "react";
import axios from "axios";
import { useLogin } from "../context/LoginContext"

const LoginModal = () => {
    const {
        showLogin,
        setShowLogin,
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        error,
    } = useLogin();
    // const { showLogin, loginPosition, handleMouseClick } = useContext(LoginContext);
    const isEmailValid = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isEmailValid(email)) {
            SpeechSynthesisErrorEvent("Invalid email address!");
            return;
        }
        // Clear previous error if there was one
        SetError(null);
        // Log the user in
        handleLogin();
    }
    if (!showLogin) return null;

    return (
        <div style={{ top: loginPostion.y, left: loginPosition.x }}>
            <form onSubmit={handleSubmit}>
                <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                />
                <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                />
                <button type="submit">Login</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
}

export default LoginModal;