import React, { Component } from 'react';
import Header from './header.js';
import SearchForm from './search-form.js';
import SearchResults from './search-results.js'
import Map from './map.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: {}
    }
  };
  

  handleLocationForm = (location) => {
    this.setState({ location });
  };

  render() {
   
    return(
      <React.Fragment>
        <Header />
        <SearchForm locationHandler={this.handleLocationForm} />
        <Map longitude={this.state.location.longitude} latitude={this.state.location.latitude} />
        <SearchResults location={this.state.location}/>
      </React.Fragment> 
    )
  }
}

export default App;
