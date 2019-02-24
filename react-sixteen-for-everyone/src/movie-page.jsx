import React, { Component } from 'react';
import axios from 'axios';

// constants
const IMAGE_URL = 'https://image.tmdb.org/t/p/w154';
const BACKDROP_URL = 'https://image.tmdb.org/t/p/w1280';


class MoviePage extends Component {
  state = {
    movie: {}
  };
  render() {
    const { movie } = this.state;

    return (
      <React.Fragment>
        <img src={movie.poster_path ? `${IMAGE_URL}${movie.poster_path}` : ''} alt="Thumbnail of the movie"/>
        <img src={movie.backdrop_path ? `${BACKDROP_URL}${movie.backdrop_path}` : ''} alt="Backdrop poster"/>

        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
      </React.Fragment>
    );
  }

  async componentDidMount() {
    const { match } = this.props;

    try {
      const {data: movie} = await axios.get(
        `https://api.themoviedb.org/3/movie/${
          match.params.id
        }?api_key=d5b443a2673ed0b0942a61242f8cec8d&language=en-US`
      );
      this.setState({ movie });
    } catch (error) {
      if (error.response) {
        console.log('Handling EXPECTED errors!');
      } else {
        console.log('Handling UN_EXPECTED errors!');
      }
    }
  }
}

export default MoviePage;
