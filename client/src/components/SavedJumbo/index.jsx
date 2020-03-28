import React from 'react';
import './SavedJumbo.css'
import picture from '../../images/bookshelf_cyan.png';

function SavedJumbo() {

    return (
        <div className="uk-section uk-section-small uk-section-muted">
            <div className="uk-container">

                <img className="bookshelf-img" src={picture} />
                <h1 className="uk-text-center">MY BOOKSHELF</h1>
                
            </div>
        </div>
    )
}

export default SavedJumbo;