import React, { Component } from 'react';
import superagent from 'superagent';
import RestaurantList from './restaurantList.js';

class Yelp extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      restaurantData: []
    }
  }
  getRestaurants = async (latitude, longitude) => {
    let restaurants = await superagent.get(`https://lit-mesa-34002.herokuapp.com/yelp/`)
                 .query({data: {'latitude': latitude, 'longitude': longitude}} )
     let restaurantData = restaurants.body; 
     this.setState({restaurantData});
   }
   render() {
     if(this.props.lat && this.props.long) {
       this.getRestaurants(this.props.lat, this.props.long);
     }
 
     return(
      <React.Fragment>
        <h3>Restaurants near {this.props.searchQuery}.</h3>
        {this.state.restaurantData.map((restaurant, index) => <RestaurantList key={index} restaurant={restaurant}/>)}
      </React.Fragment>
     );
   }
}

export default Yelp;