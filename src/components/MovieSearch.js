import React, { Component } from 'react';

class MovieSearch extends Component {
  render() {
    return (
      <div>
        <h1>MovieSearch</h1>
        <section>
        <input 
          // onChange={}
          // value={}
          name="search-bar"
          className="search-bar"
          placeholder="Search movie here"
        />
      </section>
      </div>
    );
  }
}

export default MovieSearch;