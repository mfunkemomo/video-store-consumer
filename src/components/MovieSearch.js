import React, { Component } from 'react';

class MovieSearch extends Component {
  constructor(props){
    super(props)

    this.state = {
      searchValue: '',
      error: '',
    }
  }

  const {title} = this.state;

  componentDidMount(){
    axios.get(`http://localhost:3000/movies`, {params: {title}})
    .then((response) => {
      // const movies = response.data.map((entry) => {
      //   return (entry)
      // })
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

    this.props.addCardCallback(newSearch);

    this.setState({
      id: '',
      text: '',
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