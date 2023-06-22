import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <li className="footer-item">
                <a href="https://www.galvanize.com/contact/">Contact</a>
            </li>
            <li className="footer-item">
                <a href="https://www.galvanize.com/privacy/">Privacy Policy</a>
            </li>
            <li className="footer-item">
                <a href="https://www.galvanize.com/terms-of-use/">
                    Terms of Use
                </a>
            </li>
            <li className="footer-item">
                <a href="https://www.galvanize.com/accessibility-statement/">
                    Accessibility Statement
                </a>
            </li>
            <li className="footer-item">
                <a href="https://www.galvanize.com/cookie-policy/">
                    Cookie Policy
                </a>
            </li>
            <li className="footer-item">
                <a href="https://www.galvanize.com/regulatory/">
                    Regulatory Information
                </a>
            </li>
            <li className="footer-item">
                <a href="https://www.galvanize.com/sitemap/">Sitemap</a>
            </li>
            <li className="footer-item">2023 Galvanize, All rights reserved.</li>
        </div>
    );
};

export default Footer;
