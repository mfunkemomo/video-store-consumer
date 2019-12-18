import React, { Component } from 'react';
import axios from 'axios'

class MovieSearch extends Component {
  constructor(props){
    super(props)

    this.state = {
      searchValue: '',
      error: '',
    }
  }

  

  findMovie = () => {
    const title = this.state.searchValue;
    axios.get(`http://localhost:3000/movies`, {params: {query: title}})
    .then((response) => {
      
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

    this.props.findMovie(newSearch);

    this.setState({
      searchValue: '',
    });
  }


  render() {
    return (
      <div>
        <h1>MovieSearch</h1>
        <section>
        <input 
          onChange= {this.onInputChange}
          // onChange={(event) => { searchChangeCallback(event.target.value) }}
          value={this.state.searchValue}
          name="searchValue"
          placeholder="Search movie here"
        />
        <button onSubmit={this.onSubmitSearch}>Search</button>
      </section>
      </div>
    );
  }
}

export default MovieSearch;