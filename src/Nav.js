import React, { Component } from 'react';
import {Link} from 'react-router-dom'
// import './App.css';

function Nav(){
  return (
    <nav>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/search'><li>Movie Search</li></Link>
        <Link to='/library'><li>Movie Library</li></Link>
        <Link to='/customer'><li>Customer List</li></Link>
      </ul>
    </nav>
  )
}

export default Nav;