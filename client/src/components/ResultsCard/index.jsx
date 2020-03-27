import React from 'react';

function ResultsCard(props) {
    // console.log("RESULTS CARD PROPS");
    // console.log(props);

    return (
        <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2 uk-margin" uk-grid>
            <div class="uk-card-media-left uk-cover-container">
                {/* Image needs fixing, floats above body content */}
                {/* <img src="https://picsum.photos/200" alt="" uk-cover /> */}
            </div>
            <div>
                <div class="uk-card-body">
                    <h3 class="uk-card-title">TITLE: {props.title}</h3>
                    <p>AUTHOR: {props.author}</p>
                    <p>DESCRIPTION: {props.description}</p>
                    <button class="uk-button-primary">SAVE</button>
                    <a href={props.link}><button class="uk-button-danger">PREVIEW</button></a>
                </div>
            </div>
        </div>
    )
}

export default ResultsCard;