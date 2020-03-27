import React from 'react';
import './Banner.css'

function Banner() {

    return (
        <div class="uk-section uk-section-small uk-section-muted">
            {/* <div class="uk-container"> */}

            <h1 class="uk-text-center">(REACT) GOOGLE BOOK FINDER</h1>

            <div class="uk-flex uk-flex-center">
                <div class="uk-width-1-4 uk-card uk-card-default uk-card-body uk-text-center">
                    <i class="banner-icon fas fa-eye"></i>
                    <p>FIND.</p>
                </div>
                <div class="uk-width-1-4 uk-card uk-card-default uk-card-body uk-margin-left uk-text-center">
                    <i class="banner-icon fas fa-save"></i>
                    <p>SAVE.</p>
                </div>
                <div class="uk-width-1-4 uk-card uk-card-default uk-card-body uk-margin-left uk-text-center">
                    <i class="banner-icon fas fa-book-reader"></i>
                    <p>READ.</p>
                </div>
            </div>
        </div>
        // </div>
    )
}

export default Banner;