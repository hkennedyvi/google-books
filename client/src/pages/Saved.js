import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import NavBar from '../components/NavBar';
import Search from '../components/Search';
import ResultsCard from '../components/ResultsCard';
import ResultsSection from '../components/ResultsSection';
import API from '../utils/API';

function Saved() {

    useEffect(() => {
        loadSavedBooks()
    }, [])

    function loadSavedBooks() {
        API.getBooks()
            .then(res => {
                console.log(res.data);
            }
            )
            .catch(err => console.log(err));
    };

    return (
        <h1>SAVED BOOKS</h1>
    )
}

export default Saved;