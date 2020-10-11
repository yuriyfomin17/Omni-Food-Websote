import React from 'react';
import './Header.css';
import Navigation from "../Navigation/Navigation";

function Header() {
    return (

        <header>
            <Navigation/>
            <div className="hero-text-box">
                <h1>
                    Goodbye junk food.<br/>
                    Hello super healthy meals.
                </h1>
                <a className="btn btn-full" href="https://www.google.co.uk/">I’m hungry </a>
                <a className="btn btn-ghost" href="https://www.google.co.uk/">Show me more </a>
            </div>
        </header>
    );
}

export default Header;
