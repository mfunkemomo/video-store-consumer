import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><strong>{this.props.title}</strong></li>
          <li>{this.props.overview}</li>
        </ul>
      </div>
    )
  }
}

export default Movie;