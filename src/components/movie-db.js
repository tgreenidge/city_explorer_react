import React, { Component } from 'react';
import superagent from 'superagent';
import MovieList from './movieList.js';

class MovieDB extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      moviesData: []
    }
    
  }

  getMovies = async () => {
    let movies = await superagent.get(`https://lit-mesa-34002.herokuapp.com/movies/`)
                 .query({data: this.props.searchQuery});
     let moviesData = movies.body; 
     this.setState({moviesData});
   }
   render() {
     if(this.props.searchQuery) {
       this.getMovies();
     }
 
     return(
      <React.Fragment>
        <h3>Movies filmed in {this.props.searchQuery}.</h3>
        {this.state.moviesData.map((movie, index) => <MovieList key={index} movie={movie}/>)}
      </React.Fragment>
     );
   }
}

export default MovieDB;