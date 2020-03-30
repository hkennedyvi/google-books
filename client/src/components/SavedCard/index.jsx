import React from 'react';
import './SavedCard.css';

function SavedCard(props) {

    return (
        <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2 uk-margin">
            <div className="uk-card-media-left uk-cover-container">
                {/* Image needs fixing, floats above body content */}
                <img src={props.thumbnail} alt="" />
            </div>
            <div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title">{props.title}</h3>
                    <p>AUTHOR: {props.author}</p>
                    <p>DESCRIPTION: {props.description}</p>
                    <button className="uk-button-primary"
                    onClick={(event)=>{props.handleDelete(event)}}
                    id={props.id}
                    // key={props.id}
                    >DELETE</button>
                    <a href={props.link}><button className="uk-button-danger">PREVIEW</button></a>
                </div>
            </div>
        </div>
    )
}

export default SavedCard;