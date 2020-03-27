import React, { useState, useEffect } from "react";
import API from '../utils/API';
import Banner from '../components/Banner';
import Search from '../components/Search';
import ResultsSection from '../components/ResultsSection';

function Home() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        loadBooks()
    }, [])

    // Loads all books and sets them to books
    function loadBooks() {
        API.populateLibrary()
            .then(res => {
                // console.log(res.data.items);
                setBooks(res.data.items);
                // console.log(books);
            }
            )
            .catch(err => console.log(err));
    };

    return (
        <div>
            <Banner />
            <Search />
            <ResultsSection books={books}/>
        </div>
    )
}

export default Home;
