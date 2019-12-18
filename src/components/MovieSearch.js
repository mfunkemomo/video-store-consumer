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

  searchResults = () => {
    console.log(this.state.results.length)
    console.log(this.state.results)
    if (this.state.results.length > 0){
      const foundResults = this.state.results.map((movie, i) => {
        return (
          <Movie 
            key = {i}
            title = {movie.title}
          />
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