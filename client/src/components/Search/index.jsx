import React from 'react';
import './Search.css';

function Search() {

    return (
        <div class="uk-section uk-section-small uk-section-muted search">
        <form action="">
            <input className="uk-input uk-form-width-large" type="text" placeholder="Find a book..." />
            <button className="uk-button uk-button-default"><i className="fas fa-search"></i></button>
        </form>
        </div>
    )
}

export default Search;