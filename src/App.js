import React, { Component } from 'react';
import Nav from './Nav.js'
import MovieSearch from './components/MovieSearch.js';
import MovieLibrary from './components/MovieLibrary.js';
import CustomerList from './components/CustomerList.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav/>
          <Route path='/moviesearch' component={MovieSearch}/>
          <Route path='/movielibrary' component={MovieLibrary}/>
          <Route path='/customerlist' component={CustomerList}/>
          {/* <MovieSearch/> */}
          {/* <MovieLibrary/>
          <CustomerList/> */}
        </div>
      </Router>
    );
  }
}

export default App;
