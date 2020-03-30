import React from 'react';
import './SavedSection.css';
import SavedCard from '../SavedCard';

function SavedSection(props) {
console.log(props.books);
    return (
        <div id="saved-main" className="uk-section">
            {props.books.map(book => {
                return (
                    <SavedCard
                    key={book._id}
                        id={book._id}
                        title={book.title}
                        author={book.author}
                        description={book.synopsis}
                        link={book.preview}
                        thumbnail={book.thumbnail ? book.thumbnail : "https://picsum.photos/200"}
                        handleDelete={props.handleDelete}
                    />
                )
            })
            }
        </div>
    )
}

export default SavedSection;