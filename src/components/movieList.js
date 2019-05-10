import React, {Component} from 'react';

class MovieList extends Component {
  render() {
    return(
      <div className="movies">
        <a href={this.props.movie.url}><h4>{this.props.movie.title}</h4></a>
        <img src={this.props.movie.image_url} />
        <span>
          <p><strong>Popularity:</strong> {this.props.movie.popularity}</p>
          <p><strong>Release Date:</strong> {this.props.movie.released_on}</p>
          <p><strong>Average Votes:</strong> {this.props.movie.average_votes}</p>
        </span>
        <h4>Overview</h4>
        <p>{this.props.movie.overview}</p>
      </div>
    );
  }
}

export default MovieList;