import React from 'react';
import { useUser } from "../UserProvider";
import "./Logout.css";

const Logout = () => {
    const { setUser } = useUser();
  const handleLogout = () => {
    // Code to handle logout logic and remove the JWT
    // For example, you might clear the token from local storage
    localStorage.removeItem('token');
    setUser(null);
    
    // Perform any other necessary cleanup or redirect the user
    // to a different page after logging out
  };

  return (
    <button className="logout-button" onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
