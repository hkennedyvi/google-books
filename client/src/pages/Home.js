import React, { useState } from "react";
import API from '../utils/API';
import SearchJumbo from '../components/SearchJumbo';
import SearchBar from '../components/SearchBar';
import ResultsSection from '../components/ResultsSection';

function Home() {

    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState();

    function handleInputChange(event) {
        const { value } = event.target;
        setSearchTerm({ searchTerm, value });
    }

    function handleSearch(event) {
        event.preventDefault();
        API.searchBooks(searchTerm.value)
            .then(res => {
                setBooks(res.data.items);
            });
    }

    function handleSave (event) {
        event.preventDefault();
    
        API.saveBook({
            title: this.title,
            author: this.author[0],
            synopsis: this.description,
            preview: this.link,
            thumbnail: this.thumbnail
          })
            .then(res => console.log("BOOK SAVED"))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <SearchJumbo />
            <SearchBar handleSearch={handleSearch} handleInputChange={handleInputChange} />
            <ResultsSection books={books} handleSave={handleSave} />
        </div>
    )
}

export default Home;
