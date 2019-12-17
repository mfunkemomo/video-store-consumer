import React, { Component } from 'react';
import axios from 'axios'

class Movie extends Component {
  // constructor(props){
  //   super(props)
  // }

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