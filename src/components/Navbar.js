import React from 'react';

const Navbar = () => {

    

    return (
        <div id="navbar-animmenu">
            <ul class="show-dropdown main-navbar">
                <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
                <p>
                    <a href="/">Seunggyu Lee</a>
                </p>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;