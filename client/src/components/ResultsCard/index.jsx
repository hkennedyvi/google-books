import React from 'react';

function ResultsCard(props) {

    return (
        <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2 uk-margin" uk-grid>
            <div className="uk-card-media-left uk-cover-container">
                {/* Image needs fixing, floats above body content */}
                {/* <img src="https://picsum.photos/200" alt="" uk-cover /> */}
            </div>
            <div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title">TITLE: {props.title}</h3>
                    <p>AUTHOR: {props.author}</p>
                    <p>DESCRIPTION: {props.description}</p>
                    <button className="uk-button-primary">SAVE</button>
                    <a href={props.link}><button className="uk-button-danger">PREVIEW</button></a>
                </div>
            </div>
        </div>
    )
}

export default ResultsCard;