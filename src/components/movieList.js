import React, {Component} from 'react';

class MovieList extends Component {
  render() {
    return(
      <div className="movies">
        <a href={this.props.movie.url}><h4>{this.props.movie.title}</h4></a>
        <img src={this.props.movie.image_url} />
        <p>Popularity: {this.props.movie.popularity}</p>
        <p>Release Date: {this.props.movie.released_on}</p>
        <p>Average Votes: {this.props.movie.average_votes}</p>
        <h4>Overview</h4>
        <p>{this.props.movie.overview}</p>
      </div>
    );
  }
}

export default MovieList;