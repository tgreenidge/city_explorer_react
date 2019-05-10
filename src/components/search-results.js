import React, { Component } from 'react';
import Yelp from './yelp.js';
import MovieDB from './movie-db.js';
import EventBrite from './eventbrite.js';
import DarkSky from './dark-sky.js';

class SearchResults extends Component {
  render() {
    return (
      <React.Fragment>
        <DarkSky lat={this.props.location.latitude} long={this.props.location.longitude} searchQuery={this.props.location.search_query}/>
        <Yelp lat={this.props.location.latitude} long={this.props.location.longitude} searchQuery={this.props.location.search_query} />
        <MovieDB searchQuery={this.props.location.search_query}/>
        <EventBrite lat={this.props.location.latitude} long={this.props.location.longitude} searchQuery={this.props.location.search_query}/>
      </React.Fragment>
    )
  }
}

export default SearchResults;