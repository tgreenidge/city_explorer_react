import React, { Component } from 'react';
import superagent from 'superagent';

class SearchForm extends Component {

  constructor(props) {
    super(props);
  }

  handleSubmit = async e => {
    e.preventDefault();
    let queryString = e.target[0].value;
    let data = await superagent.get(`https://lit-mesa-34002.herokuapp.com/location/?data=${queryString}`);
    let location = data.body;
    console.log(location)
    this.props.locationHandler(location);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input />
        <button>Search</button>
      </form>
    );   
  }
}

export default SearchForm;