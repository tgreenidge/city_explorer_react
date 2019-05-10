import React, {Component} from 'react';

class RestaurantList extends Component {
  render() {
    return(
      <div className="restaurants">
        <a href={this.props.restaurant.url}><h4>{this.props.restaurant.name}</h4></a>
        <img src={this.props.restaurant.image_url} />
        <p>Price: {this.props.restaurant.price}</p>
        <p>Rating: {this.props.restaurant.rating}</p>
      </div>
    );
  }
}

export default RestaurantList;