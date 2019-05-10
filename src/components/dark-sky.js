import React, { Component } from 'react';
import superagent from 'superagent';
import WeatherList from './weather-list.js';

class DarkSky extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      weatherData: []
    }
  }

  getData = async (latitude, longitude) => {
   let weather = await superagent.get(`https://lit-mesa-34002.herokuapp.com/weather/`)
                .query({data: {'latitude': latitude, 'longitude': longitude}} )
    let weatherData = weather.body;  
    this.setState({weatherData});
  }
  render() {
    if(this.props.lat && this.props.long) {
      this.getData(this.props.lat, this.props.long);
    }

    return(
     <React.Fragment>
       <h3>Weather in {this.props.searchQuery} for the next 8 days</h3>
       {this.state.weatherData.map((day, index) => <WeatherList key={index} forecast={day.forecast} day={day.time}/>)}
     </React.Fragment>
    );
  }
}

export default DarkSky;