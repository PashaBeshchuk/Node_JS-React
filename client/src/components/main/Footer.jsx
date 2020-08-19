import React from "react"
import "./main.scss"
const Footer = () => {
    return <div className="footer">
        <div className="footer__input">
            <input placeholder="Enter your email"/>
            <button>Submit</button>
        </div>
        <div className="footer__contant">
            <ul>
                <li>AppCo</li>
                <li>All rights reserved by ThemeTags</li>
                <li>Copyrights © 2019.</li>
            </ul>
        </div>
    </div>
}

export default Footer;