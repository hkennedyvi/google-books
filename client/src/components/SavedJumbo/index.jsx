import React from 'react';
import './SavedJumbo.css'
import BookshelfIcon from '../../images/bookshelf_cyan.png';

function SavedJumbo() {

    return (
        <div className="uk-section uk-section-small uk-section-muted">
            <div className="uk-container">

                <img className="bookshelf-img" src={BookshelfIcon} alt="bookshelf" />
                <h1 className="uk-text-center">MY BOOKSHELF</h1>
                
            </div>
        </div>
    )
}

export default SavedJumbo;