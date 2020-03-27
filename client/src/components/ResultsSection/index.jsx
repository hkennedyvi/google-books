import React from 'react';
import './ResultsSection.css';
import ResultsCard from '../ResultsCard';

function ResultsSection(props) {
    console.log(props);
    return (
        <div id="results-main" className="uk-section">
            {props.books.map(book => {
                return (
                <ResultsCard 
                    title={book.volumeInfo.title} 
                    author={book.volumeInfo.authors} 
                    description={book.volumeInfo.description}
                    />
                    )
            })
            }
        </div>
    )
}

export default ResultsSection;