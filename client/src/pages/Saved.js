import React, { useEffect, useState } from 'react';
import SavedJumbo from '../components/SavedJumbo';
import SavedSection from '../components/SavedSection';
import API from '../utils/API';

function Saved() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadSavedBooks()
    }, [])

    function loadSavedBooks() {

        API.getBooks().then(res => {
            setBooks(res.data);
        })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <SavedJumbo />
            <SavedSection books={books} />
            <div className="uk-text-center">Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
    )
}

export default Saved;