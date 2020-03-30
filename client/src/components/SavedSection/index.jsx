import React from 'react';
import './SavedSection.css';
import SavedCard from '../SavedCard';

function SavedSection(props) {

    return (
        <div id="results-main" className="uk-section">
            {props.books.map(book => {
                return (
                    <SavedCard
                        title={book.title}
                        author={book.author}
                        description={book.synopsis}
                        link={book.preview}
                        thumbnail={book.thumbnail ? book.thumbnail : "https://picsum.photos/200"}
                    />
                )
            })
            }
        </div>
    )
}

export default SavedSection;