import React from 'react';
import './SearchJumbo.css'

function SearchJumbo() {

    return (
        <div className="uk-section uk-section-small uk-section-muted">
            <div className="uk-container">

                <h1 className="uk-text-center">LET'S GET STARTED</h1>

                <div className="uk-flex uk-flex-center">
                    <div className="uk-width-1-4 uk-card uk-card-default uk-card-body uk-text-center">
                        <i className="banner-icon fas fa-eye"></i>
                        <p>FIND.</p>
                    </div>
                    <div className="uk-width-1-4 uk-card uk-card-default uk-card-body uk-margin-left uk-text-center">
                        <i className="banner-icon fas fa-save"></i>
                        <p>SAVE.</p>
                    </div>
                    <div className="uk-width-1-4 uk-card uk-card-default uk-card-body uk-margin-left uk-text-center">
                        <i className="banner-icon fas fa-book-reader"></i>
                        <p>READ.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchJumbo;