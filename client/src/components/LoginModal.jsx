import React from "react";
import axios from "axios";
import useLogin from "../context/LoginContext"

const LoginModal = () => {
    const { showLogin, loginPosition, handleMouseClick } = useContext(LoginContext);
    const isEmailValid = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

}

export default LoginModal;