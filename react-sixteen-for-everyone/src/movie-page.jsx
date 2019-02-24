import React, { Component } from 'react';
import axios from 'axios';
import Overdrive from 'react-overdrive';

// constants
const IMAGE_URL = 'https://image.tmdb.org/t/p/w154';
const BACKDROP_URL = 'https://image.tmdb.org/t/p/w1280';

class MoviePage extends Component {
  state = {
    movie: {}
  };

  moviePageRef = React.createRef();

  render() {
    const { movie } = this.state;

    return (
      <div className="movie-page" ref={this.moviePageRef}>
        <div className="movie-info">
          <div className="container">
            <Overdrive id={`${movie.id}`}>
              <img
                src={
                  movie.poster_path ? `${IMAGE_URL}${movie.poster_path}` : ''
                }
                alt="Thumbnail of the movie"
                className="movie-info__img"
              />
            </Overdrive>

            <div className="movie-info__desc">
              <h2>{movie.title}</h2>
              <h3>{movie.release_date}</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  async componentDidMount() {
    const { match } = this.props;
    const { style: moviePageStyle } = this.moviePageRef.current;

    try {
      const { data: movie } = await axios.get(
        `https://api.themoviedb.org/3/movie/${
          match.params.id
        }?api_key=d5b443a2673ed0b0942a61242f8cec8d&language=en-US`
      );
      moviePageStyle.backgroundImage = `url(${
        movie.backdrop_path ? `${BACKDROP_URL}${movie.backdrop_path}` : ''
      })`;
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
