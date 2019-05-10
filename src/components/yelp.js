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

  getRestaurants = async () => {
    let restaurants = await superagent.get(`https://lit-mesa-34002.herokuapp.com/yelp/`)
                 .query({data: {'latitude': this.props.lat, 'longitude': this.props.long}} )
     let restaurantData = restaurants.body; 
     this.setState({restaurantData});
   }
   render() {
     if(this.props.lat && this.props.long) {
       this.getRestaurants();
     }
 
     return(
      <div className='restaurants-container'>
        <h3>Restaurants near {this.props.searchQuery}.</h3>
        {this.state.restaurantData.map((restaurant, index) => <RestaurantList key={index} restaurant={restaurant}/>)}
      </div>
     );
   }
}

export default Yelp;