import React, { Component } from 'react';
import Nav from './Nav.js'
import MovieSearch from './components/MovieSearch.js';
import MovieLibrary from './components/MovieLibrary.js';
import CustomerList from './components/CustomerList.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      searchValue: '',
      selectedCustomer: '',
      selectedMovie: '',
      error: '',
    }
  }


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
