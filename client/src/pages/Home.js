import React from 'react';
import Banner from '../components/Banner';
import Search from '../components/Search';
import ResultsSection from '../components/ResultsSection';

function Home() {
    return (
        <div>
            <Banner />
            <Search />
            <ResultsSection />
        </div>
    )
}

export default Home;
