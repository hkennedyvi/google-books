import React, { Component } from 'react';
import API from '../utils/API';

class Test extends Component {
    state = {}
    componentDidMount() {
        this.findBooks();
    }

    findBooks = () => {
        API.populateLibrary()
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <h1>test</h1>
        );
    }
}

export default Test;