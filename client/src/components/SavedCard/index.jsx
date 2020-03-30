import React from 'react';
import './SavedCard.css';

function SavedCard(props) {

    return (
        <div className="book-card uk-card uk-card-default uk-child-width-1-2@s" uk-grid="true">
        <div className="uk-card-media-left uk-cover-container">
            <img src={props.thumbnail} alt="" uk-cover="true" />
        </div>
        <div>
            <div className="uk-card-body">
                <h3 className="uk-card-title">{props.title}</h3>
                <p>AUTHOR: {props.author}</p>
                <p>DESCRIPTION: {props.description}</p>
                <button className="uk-button-primary"
                onClick={(event)=>{props.handleDelete(event)}}
                id={props.id}
                >DELETE</button>
                <a href={props.link} target="_blank"><button className="uk-button-danger">PREVIEW</button></a>
            </div>
        </div>
    </div>
    )
}

export default SavedCard;