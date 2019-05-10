import React, { Component } from 'react';
import superagent from 'superagent';
import EventList from './eventList.js';

class EventBrite extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      eventData: []
    }
  }

  getEventsData = async (latitude, longitude) => {
    let events = await superagent.get(`https://lit-mesa-34002.herokuapp.com/events/`)
                 .query({data: {'latitude': latitude, 'longitude': longitude}} )
     let eventData = events.body;  
     this.setState({eventData});
   }
   render() {
     if(this.props.lat && this.props.long) {
       this.getEventsData(this.props.lat, this.props.long);
     }
 
     return(
      <React.Fragment>
        <h3>Events near {this.props.searchQuery} for the next 8 days</h3>
        {this.state.eventData.map((event, index) => <EventList key={index} event={event}/>)}
      </React.Fragment>
     );
   }
}

export default EventBrite;