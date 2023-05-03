import { useState, useContext, createContext } from "react";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [showLogin, setShowLogin] = useState(false);
    const [loginPosition, setLoginPosition] = useState({ x: 0, y: 0 });
    const [email, setEmail] = useState("");
    cosnt [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isRegistering, setIsRegistering] = useState(false);

    const handleMouseClick = (e) => {
        const x = e.clientx;
        const y = e.clienty;
        setLoginPosition({ x, y });
        setShowLogin(true);
    };

    return (
        <LoginContext.Provider
            value={{
                email,
                setEmail,
                password,
                setPassword,
                isRegistering,
                setIsRegistering,
                showLogin,
                loginPosition,
                handleMouseClick,
                error,
                setError,
            }}
        >
            {children}
        </LoginContext.Provider>
    );
};

const useLogin = () => {
    const context = useContext(LoginContext);
    if (!context) {
        throw new Error("User must login")
    }
    return context;
}

export default { LoginProvider, useLogin };