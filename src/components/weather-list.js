import React, { Component } from 'react';

class WeatherList extends Component {
  render() {
    return(<div>{this.props.day}: {this.props.forecast} </div>);
  }
}

export default WeatherList;