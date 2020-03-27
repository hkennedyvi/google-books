import React from 'react';
import './Search.css';

function Search(props) {

    return (
        <div class="uk-section uk-section-small uk-section-muted search">
        <form action="">
            <input 
            className="uk-input uk-form-width-large" type="text" placeholder="Find a book..." 
            onChange={(event) => {props.handleInputChange(event) }} />
            <button 
            className="uk-button uk-button-default" 
            value=""
            onClick={(event) => { props.handleSearch(event) }}>
                <i className="fas fa-search"></i>
                </button>
        </form>
        </div>
    )
}

export default Search;