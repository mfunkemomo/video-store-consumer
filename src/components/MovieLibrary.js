import React, { Component } from 'react';
import Movie from './Movie.js'
import {Route, Link} from 'react-router-dom'
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
    axios.get(`http://localhost:3000/movies`)
    .then((response) => {
      const movies = response.data.map((entry) => {
        return (entry)
      })
      this.setState({
        movies: movies
      })
    })
    .catch((error) => {
      this.setState({ error: error.message });
    })
  }

  displayMovies = () => {
    const filmCollection = this.state.movies.map((movie, i) => {
      return (
        <div key = {i}>
          <Movie 
            title = {movie.title}
          />
          <button
            type="button"
            label="Select movie"
            onClick={() => {this.props.selectMovieCallback(movie)}}
          >Select movie</button>
        </div>
      )
    })
    return filmCollection
  }

  render() {
    return (
      <div className="App">
        <h1>Movie Library</h1>
        {this.displayMovies()}
      </div>
    );
  }
}

export default MovieLibrary;
