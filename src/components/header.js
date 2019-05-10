import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h1>City Explorer</h1>
        <p>Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!</p>
      </div>
    )
  }
}

export default Header;