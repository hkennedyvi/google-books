import React from 'react';
import './NavBar.css'

function NavBar() {
    return (
        <nav className="uk-navbar-container uk-margin" uk-navbar>
            <div className="uk-navbar-left">

                <a className="uk-navbar-item uk-logo" href="/"><i className="fas fa-book"></i></a>

                <div className="uk-navbar-right">

                    <div className="uk-navbar-item">
                        {/* Removed javascript:void(0) from form action below */}
                        <form action="">
                            <input className="uk-input uk-form-width-small" type="text" placeholder="Find a book..." />
                            <button className="uk-button uk-button-default"><i className="fas fa-search"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;