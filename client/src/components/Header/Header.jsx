import React from "react";
import "./Header.css";
import { useUser } from "../UserProvider.jsx";
import Logout from "../Logout/Logout.jsx";

export default function Header() {
    const user = useUser();

    const capitalizeFirstLetter = (word) => {
        if (!word || word.length === 0) {
            return "";
        }
        const firstLetter = word.charAt(0);
        const firstLetterCap = firstLetter.toUpperCase();
        const remainingLetters = word.slice(1);
        const capitalizedWord = firstLetterCap + remainingLetters;
        return capitalizedWord;
    };

    const userLoggedIn =
        user && user.user
            ? `${capitalizeFirstLetter(
                  user.user.firstname
              )} ${capitalizeFirstLetter(user.user.lastname)}`
            : null;

    return (
        <div className="header-root-container">
            <div className="header-logo-container">
                <a href="https://www.galvanize.com/">
                    <img
                        width="259"
                        height="50"
                        src="https://www.galvanize.com/wp-content/uploads/2022/11/galvanize_logo_small-scale_full-color_dark-background.png"
                        className="skip-lazy logo-desktop"
                        alt="Galvanize homepage"
                        decoding="async"
                        aria-label="Galvanize homepage"
                        srcSet="https://www.galvanize.com/wp-content/uploads/2022/11/galvanize_logo_small-scale_full-color_dark-background.png 315w, https://www.galvanize.com/wp-content/uploads/2022/11/galvanize_logo_small-scale_full-color_dark-background-232x45.png 232w, https://www.galvanize.com/wp-content/uploads/2022/11/galvanize_logo_small-scale_full-color_dark-background-150x29.png 150w, https://www.galvanize.com/wp-content/uploads/2022/11/galvanize_logo_small-scale_full-color_dark-background-250x48.png 250w"
                        sizes="(max-width: 259px) 100vw, 259px"
                    />
                </a>
            </div>
            <div className="header-title-container">
                <span>Hacking Transitions</span>
            </div>
            <div className="header-greeting-container">
                <div>
                    {userLoggedIn && (
                        <span className="greeting">Hello, {userLoggedIn}</span>
                    )}
                </div>
                <div>{userLoggedIn && <Logout />}</div>
            </div>
        </div>
    );
}
