import React from 'react';
import NavBar from './components/NavBar';
import ResultsSection from './components/ResultsSection';
import Banner from './components/Banner';
import Search from './components/Search'

function App() {
  return (
    <div>
    <NavBar />
    <Banner />
    <Search />
    <ResultsSection />
    </div>
  );
}

export default App;
