import React, { Component } from 'react';
import Customer from './Customer'
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
        <div className="movie-customer-display selectCustomer" key = {i}>
          <section>
          <Customer 
          name = {customer.name}
        />
        </section>
        <section>
          <button
            type="button"
            label="Select customer"
            onClick={() => {this.props.selectCustomerCallback(customer)}}
          >Select customer</button>
          </section>
        </div>
        
      )
    })
    return ourCustomers
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-header">CustomerList</h1>
        {this.displayCustomers()}
      </div>
    );
  }

}
export default CustomerList;