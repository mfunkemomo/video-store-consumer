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

  

  findMovie = (title) => {
    // const title = this.state.searchValue;
    console.log('it worked?????!')
    axios.get(`http://localhost:3000/movies`, {params: {query: title}})
    .then((response) => {
      console.log('it worked!')
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
    // console.log()
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
      </div>
    );
  }
}

export default MovieSearch;