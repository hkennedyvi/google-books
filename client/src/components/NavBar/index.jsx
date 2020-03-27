import React from 'react';
import './NavBar.css'

function NavBar() {
    return (
        <nav className="uk-navbar-container uk-margin" uk-navbar>
            <div className="uk-navbar-left">

                <a className="uk-navbar-item uk-logo" href="/"><i className="fas fa-book"></i></a>

                <div className="uk-navbar-right">

                    <ul className="uk-navbar-nav">
                        <li><a href="/">SEARCH</a></li>
                        <li><a href="/saved">SAVED</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;