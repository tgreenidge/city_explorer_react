import React, { Component } from 'react';

class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let geoCodeUrl  = `https://maps.googleapis.com/maps/api/staticmap?center=${this.props.latitude}%2c%20${this.props.longitude}&zoom=13&size=600x300&maptype=roadmap&key=${process.env.REACT_APP_GEOCODE_API_KEY}`;

    return (
      <div className="map">
        <img src={geoCodeUrl}/>
      </div>
    )
  }
}
export default Map;