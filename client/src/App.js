import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Saved from './pages/Saved';
import NavBar from './components/NavBar';
import './App.css'

function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/saved">
          <Saved />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
