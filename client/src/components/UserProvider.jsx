import React, { useState } from "react";
import { useSignIn, useIsAuthenticated } from "react-auth-kit";
import { userContext } from "../context/UserContext.jsx";

export const UserProvider = ({ children }) => {
    const signIn = useSignIn();
    const isAuthenticated = useIsAuthenticated();

    return (
        <userContext.Provider value={{ signIn, isAuthenticated }}>
            {children}
        </userContext.Provider>
    );
};