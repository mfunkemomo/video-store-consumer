import React, { Component } from 'react';
import Movie from './Movie.js'
import axios from 'axios'

class MovieSearch extends Component {
  constructor(props){
    super(props)

    this.state = {
      searchValue: '',
      results: [],
      error: '',
    }
  }

  findMovie = (title) => {
    axios.get(`http://localhost:3000/movies`, {params: {query: title}})
    .then((response) => {
      const responseResults = response.data.map((entry) => {
        return (entry)
      })
      this.setState({results: responseResults})
    })
    .catch((error) => {
      this.setState({ error: error.message });
    })
  }

  onInputChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }

  onSubmitSearch = (event) => {
    event.preventDefault();
    
    const newSearch = {
      searchValue: this.state.searchValue,
    }

    this.findMovie(newSearch.searchValue);

    this.setState({
      searchValue: '',
    });
  }

  addMovie = (newMovie) => {
    axios.post(`http://localhost:3000/movies/${newMovie.title}`)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      this.setState({ error: error.message });
    })
  }

  searchResults = () => {
    if (this.state.results.length > 0){
      const foundResults = this.state.results.map((movie, i) => {
        return (
          <div>
            <Movie 
              key = {i}
              title = {movie.title}
            />
            <button
              type="button"
              aria-label="Add movie"
              onClick={() => {this.addMovie(movie)}}
            >Add movie to rental library</button>
          </div>
        )
      })
      return foundResults
    }
  }

  render() {
    return (
      <div>
        <h1>Movie Search</h1>
        <section>
        <form onSubmit={this.onSubmitSearch}>
          <input 
            onChange= {this.onInputChange}
            value={this.state.searchValue}
            name="searchValue"
            placeholder="Search movie here"
          />
          <div>
            <input type="submit" value="Search" />
          </div>
        </form>
      </section>
      <section>
        {this.searchResults()}
      </section>
      </div>
    );
  }
}

export default MovieSearch;