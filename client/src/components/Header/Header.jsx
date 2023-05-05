import React from "react";
import './Header.css'

export default function Header(){
    return(
        <span id="header">
            <span id="home-container">
                <a href="https://www.galvanize.com/">
                    <img src="https://www.galvanize.com/wp-content/uploads/2022/11/galvanize_logo_small-scale_full-color_dark-background.png" alt="Galvanize Logo" />
                </a>
            </span>
            <span id="title-container">
                <h1 id="title">Hacking Transitions</h1>
            </span>
            <span id="greeting-container">
                <h3 id="greeting">Hello, "username" </h3>
            </span>
        </span>
    )
}