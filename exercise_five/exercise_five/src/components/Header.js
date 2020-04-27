import React from "react";

function Header({LogoutFunction, isLoggedIn}) {
    return (
        <header className="Header">
            <nav className="Header__nav">
                {isLoggedIn && <a href="/">Profile</a>}
                {isLoggedIn && <a href="/create-account">Create Account</a>}
                {isLoggedIn && <a href="/login"> Login</a>}
                {isLoggedIn && 
                    <a href="" onClick={() => LogoutFunction()} > 
                        Log Out
                    </a>}
            </nav>
        </header>
    );
}

export default Header;