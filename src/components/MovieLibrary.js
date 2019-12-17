import React, { Component } from 'react';
import axios from 'axios'

class MovieLibrary extends Component {
  constructor(props){
    super(props)

    this.state = {
      movies: [],
      error: '',
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:3000/`)
    .then((response) => {
      this.setState({
        movies: response.data
      })
    })
    .catch((error) => {
      this.setState({
        this.setState({ error: error.message });
      })
    })
  }

  displayMovies = () => {
    const filmCollection = this.state.movies.map((movie, i) => {
      return (
        <ul>
          <li key={i}>
            {movie}
          </li>
          console.log(movie)
        </ul>
      )
    })
    return filmCollection
  }

  render() {
    return (
      <div className="App">
        <h1>MovieLibrary</h1>
        {this.displayMovies()}
      </div>
    );
  }
}

export default MovieLibrary;
