import React, { Component } from 'react';
import {Link} from 'react-router-dom'
// import './App.css';

function Nav(){
  return (
    <nav>
      <ul>
        <Link to='/moviesearch'><li>Movie Search</li></Link>
        <Link to='/movielibrary'><li>Movie Library</li></Link>
        <Link to='/customerlist'><li>Customer List</li></Link>
      </ul>
    </nav>
  )
}

export default Nav;