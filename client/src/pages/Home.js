import React, { useState, useEffect } from "react";
import API from '../utils/API';
import Banner from '../components/Banner';
import Search from '../components/Search';
import ResultsSection from '../components/ResultsSection';

function Home() {

    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState();

    // useEffect(() => {
    //     loadBooks()
    // }, [])

    // // Loads all books and sets them to books
    // function loadBooks() {
    //     API.populateLibrary()
    //         .then(res => {

    //             // console.log(res.data.items);
    //             setBooks(res.data.items);
    //             // console.log(books);
    //         }
    //         )
    //         .catch(err => console.log(err));
    // };

    function handleInputChange(event) {
        const { value } = event.target;
        console.log("VALUE" + value);
        setSearchTerm({ searchTerm, value });
    }

    function handleSearch(event) {
        event.preventDefault();
        API.searchBooks(searchTerm.value)
            .then(res => {
                setBooks(res.data.items);
            });
    }

    return (
        <div>
            <Banner />
            <Search handleSearch={handleSearch} handleInputChange={handleInputChange} />
            <ResultsSection books={books} />
        </div>
    )
}

export default Home;
