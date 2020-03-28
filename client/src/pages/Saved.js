import React, { useEffect, useState } from 'react';
import SavedJumbo from '../components/SavedJumbo';
import ResultsSection from '../components/ResultsSection';
import API from '../utils/API';

function Saved() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadSavedBooks()
    }, [])

    function loadSavedBooks() {
        API.populateLibrary()
            .then(res => {
                setBooks(res.data.items);
            }
            )
            .catch(err => console.log(err));
    };

    return (
        <div>
            <SavedJumbo />
            <ResultsSection books={books} />
        </div>
    )
}

export default Saved;