import React from 'react';
import './ResultsSection.css';
import ResultsCard from '../ResultsCard';

function ResultsSection(props) {

    return (
        <div id="results-main" className="uk-section">
            {props.books.map(book => {
                return (
                    <ResultsCard
                        title={book.title ? book.title : book.volumeInfo.title}
                        author={book.author ? book.author : book.volumeInfo.authors}
                        description={book.synopsis ? book.synopsis : book.volumeInfo.description}
                        link={book.preview ? book.preview : book.volumeInfo.previewLink}
                        thumbnail={book.thumbnail ? book.thumbnail : book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : "https://picsum.photos/200"}
                    />
                )
            })
            }
        </div>
    )
}

export default ResultsSection;