import React, { Component } from 'react';
import Nav from './Nav.js'
import MovieSearch from './components/MovieSearch.js';
import MovieLibrary from './components/MovieLibrary.js';
import CustomerList from './components/CustomerList.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
      </div>
    );
  }
}

export default App;
