import React, { Component } from 'react';

class WeatherList extends Component {
  render() {
    return(<div><h4>{this.props.day}</h4> {this.props.forecast} </div>);
  }
}

export default WeatherList;