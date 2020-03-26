import React from 'react';

function ResultsCard() {

    return (
        <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2 uk-margin" uk-grid>
            <div class="uk-card-media-left uk-cover-container">
                {/* Image needs fixing, floats above body content */}
                {/* <img src="https://picsum.photos/200" alt="" uk-cover /> */}
            </div>
            <div>
                <div class="uk-card-body">
                    <h3 class="uk-card-title">TITLE:</h3>
                    <p>AUTHOR:</p>
                    <p>DESCRIPTION: This book is crazy a lot of stuff happens and people say woaaahhhh at the end.</p>
                </div>
            </div>
        </div>
    )
}

export default ResultsCard;