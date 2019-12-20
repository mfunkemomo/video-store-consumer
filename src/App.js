import React, { Component } from 'react';
import Nav from './Nav.js'
import MovieSearch from './components/MovieSearch.js';
import MovieLibrary from './components/MovieLibrary.js';
import CustomerList from './components/CustomerList.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      selectedCustomer: {},
      selectedMovie: {},
      error: '',
    }
  }

  selectMovie = (movie) => {
    this.setState({selectedMovie: movie})
    console.log(this.state.selectedMovie)
  }

  selectCustomer = (customer) => {
    this.setState({selectedCustomer: customer})
    console.log(this.state.selectedCustomer)
  }

  checkout = () => {
    if (Object.entries(this.state.selectedCustomer).length > 0 && Object.entries(this.state.selectedMovie).length > 0) {
      const movieTitle = this.state.selectedMovie.title;
      const customerId = this.state.selectedCustomer.id;
      let dueDate = new Date();

      dueDate.setDate(dueDate.getDate() + 7);
      console.log(dueDate)

      const params = {
        customer_id: customerId,
        due_date: dueDate.toString()
      }

      axios.post(`http://localhost:3000/rentals/${movieTitle}/check-out`, params)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        this.setState({ error: error.message });
      }) 
    }
  }

  displayRental = () => {
    if (Object.entries(this.state.selectedCustomer).length > 0 && Object.entries(this.state.selectedMovie).length > 0){
      return (
        <div>
          <p>Selected customer: {this.state.selectedCustomer.name}</p>
          <p>Selected movie: {this.state.selectedMovie.title}</p>
          <button
              type="button"
              label="checkout"
              onClick={() => {this.checkout()}}
            >Checkout this rental</button>
        </div>
      )
    } else {
      return (
        <div className="no-rental">
          <p>Cannot create rental until a customer and movie has been selected.</p>
          <p>Select a customer and movie.</p>
        </div>
      )
    }
  }

  render() {
    const Home = () => {
      return (
      <div className="App">
        <h1 className="App-header">Homepage</h1>
        <p className="App-intro">{this.displayRental()}</p>
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
            <Route path='/library'
              render={(props) => 
              <MovieLibrary {...props}
                selectMovieCallback={this.selectMovie}
              />}
            />
            <Route path='/customer'
              render={(props) => 
              <CustomerList {...props}
                selectCustomerCallback={this.selectCustomer}
              />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
