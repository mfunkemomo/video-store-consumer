import React, { Component } from 'react';
import axios from 'axios'


class Customer extends Component {
  

  render() {
    return (
      <div>
        <ul>
          <li>{this.props.name}</li>
        </ul>
      </div>
    )
  }
}

export default Customer;