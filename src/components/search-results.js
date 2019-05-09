import React, { Component } from 'react';
import Yelp from './yelp.js';
import MovieDB from './movie-db.js';
import EventBrite from './eventbrite.js';
import DarkSky from './dark-sky.js';

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Yelp lat={this.props.location.latitude} long={this.props.location.longitude} />
        <MovieDB lat={this.props.location.latitude} long={this.props.location.longitude} />
        <EventBrite />
        <DarkSky />
      </React.Fragment>
    )
  }
}

export default SearchResults;