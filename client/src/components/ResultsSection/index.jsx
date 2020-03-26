import React from 'react';
import './ResultsSection.css';
import ResultsCard from '../ResultsCard';

function ResultsSection() {

    return (
        <div id="results-main" className="uk-section">
            <ResultsCard />
            <ResultsCard />
            <ResultsCard />
            <ResultsCard />
        </div>
    )
}

export default ResultsSection;