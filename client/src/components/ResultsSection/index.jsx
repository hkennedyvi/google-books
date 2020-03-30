import React from 'react';
import './ResultsSection.css';
import ResultsCard from '../ResultsCard';

function ResultsSection(props) {

    return (
        <div id="results-main" className="uk-section">
            {props.books.map(book => {
                return (
                    <ResultsCard
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors}
                        description={book.volumeInfo.description}
                        link={book.volumeInfo.previewLink}
                        thumbnail={book.thumbnail ? book.volumeInfo.imageLinks.thumbnail : "https://picsum.photos/200"}
                        handleSave={props.handleSave}
                    />
                )
            })
            }
        </div>
    )
}

export default ResultsSection;