import React, { Component } from 'react';
import axios from 'axios';
// components
import Movie from './Movie';

class MoviesPage extends Component {
  state = {
    movies: []
  };

  render() {
    const {movies} = this.state;

    return (
      <div>
        {movies.map(movie => <Movie key={movie.id} movie={movie} {...this.props} />)}
      </div>
    )
  }

  async componentDidMount() {
    try {
      const moviesBlob = await axios.get(
        'https://api.themoviedb.org/3/discover/movie?api_key=d5b443a2673ed0b0942a61242f8cec8d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
      );
      const {results: movies} = moviesBlob.data;
      this.setState({movies});

    } catch (error) {
      if (error.response) {
        console.log('Handling EXPECTED errors!');
      } else {
        console.log('Handling UN_EXPECTED errors!');
      }
    }
  }
}

export default MoviesPage;
