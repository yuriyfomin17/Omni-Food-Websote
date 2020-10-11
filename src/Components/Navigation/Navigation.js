import React from 'react';
import logo from "./images/logo-white.png"
import "./Navigation.css"

function Navigation() {
    return (
        <nav>
            <div className="row">
                <img src={logo} alt="Omnifood logo" className="logo"/>
                <ul className="main-nav">
                    <li><a href="https://www.google.co.uk/">Food delivery</a></li>
                    <li><a href="https://www.google.co.uk/">How it works</a></li>
                    <li><a href="https://www.google.co.uk/">Our cities</a></li>
                    <li><a href="https://www.google.co.uk/">Sign up</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;