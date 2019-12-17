import React, { Component } from 'react';
import Nav from './Nav.js'
import MovieSearch from './components/MovieSearch.js';
import MovieLibrary from './components/MovieLibrary.js';
import CustomerList from './components/CustomerList.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    const Home = () => {
      return (
      <div>
        <h1>Homepage</h1>
      </div>
      )
    }

    return (
      <Router>
        <div className="App">
          <Nav/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/search' component={MovieSearch}/>
            <Route path='/library' component={MovieLibrary}/>
            <Route path='/customer' component={CustomerList}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
