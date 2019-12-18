import React, { Component } from 'react';
import Customer from './Customer'
import {Route, Link} from 'react-router-dom'
import axios from 'axios';

class CustomerList extends Component {
  constructor(props){
    super(props)

    this.state = {
      customers: [],
      error: '',
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:3000/customers`)
    .then((response) => {
      const customers = response.data.map((customer) => {
        return (customer)
      })
      this.setState({
        customers: customers
      })
    })
    .catch((error) => {
      this.setState({ error: error.message });
    })
  }

  displayCustomers = () => {
    const ourCustomers = this.state.customers.map((customer, i) => {
      return (
        <Customer 
          key = {i}
          name = {customer.name}
        />
      )
    })
    return ourCustomers
  }

  render() {
    return (
      <div className="App">
        <h1>CustomerList</h1>
        {this.displayCustomers()}
      </div>
    );
  }

}
export default CustomerList;