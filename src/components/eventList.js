import React, {Component} from 'react';

class EventList extends Component {
  render() {
    return(
      <div className="events">
        <a href={this.props.event.link}><h4>{this.props.event.name}</h4></a>
        <p>Date: {this.props.event.event_date}</p>
        <h4>Summary</h4>
        <p>{this.props.event.summary}</p>
      </div>
    );
  }
}

export default EventList;