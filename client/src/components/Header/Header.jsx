import React, { useState, useEffect } from "react";
import './Header.css';
import { useUser } from "../UserProvider.jsx";
import Logout from "../Logout/Logout.jsx";


export default function Header(){
    const [ email, setEmail ] = useState("");
    const user = useUser(); 
    const userLoggedIn = user && user.user ? `${user.user.firstname} ${user.user.lastname}` : null;
    ;
    useEffect(() => {
        // console.log(userLoggedIn);
      }, [user]);
     
    // useEffect(() => {
    //     fetch(`http://localhost:3000/api/users`)
    //         .then(response => response.json())
    //         .then(data => console.log(data))
    //         .catch(error => console.log(error));
    // }, []);

    return(
        <span id="header">
        <span id="home-container">
            <a href="https://www.galvanize.com/">
                <img width="259" height="50" src="https://www.galvanize.com/wp-content/uploads/2022/11/galvanize_logo_small-scale_full-color_dark-background.png" class="skip-lazy logo-desktop" alt="Galvanize homepage" decoding="async" aria-label="Galvanize homepage" srcset="https://www.galvanize.com/wp-content/uploads/2022/11/galvanize_logo_small-scale_full-color_dark-background.png 315w, https://www.galvanize.com/wp-content/uploads/2022/11/galvanize_logo_small-scale_full-color_dark-background-232x45.png 232w, https://www.galvanize.com/wp-content/uploads/2022/11/galvanize_logo_small-scale_full-color_dark-background-150x29.png 150w, https://www.galvanize.com/wp-content/uploads/2022/11/galvanize_logo_small-scale_full-color_dark-background-250x48.png 250w" sizes="(max-width: 259px) 100vw, 259px" />
            </a>
        </span>
        <span id="title-container">
            <h1 id="title">Hacking Transitions</h1>
        </span>
        <span id="greeting-container">
            <div id="greeting">
                {userLoggedIn && <h3>Hello, {userLoggedIn}</h3>}
                {userLoggedIn && <span className="logout-container"><Logout /></span>}
            </div>
        </span>
    </span>
    

    )
}