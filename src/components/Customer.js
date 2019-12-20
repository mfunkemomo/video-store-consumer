import React, { Component } from 'react';


class Customer extends Component {
  

  render() {
    return (
      <div>
        <ul>
          <li><strong>{this.props.name}</strong></li>
        </ul>
      </div>
    )
  }
}

export default Customer;