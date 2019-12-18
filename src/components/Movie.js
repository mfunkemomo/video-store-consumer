import React, { Component } from 'react';
import axios from 'axios'

class Movie extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.title}</li>
        </ul>
      </div>
    )
  }
}

export default Movie;