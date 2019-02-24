import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// constants
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w154';

const Movie = ({ movie = {}, match }) => {
  return (
    <div className="movie">
      <Link to={`/movies/${movie.id}`}>
        <img
          src={`${IMAGE_PATH}${movie.poster_path}`}
          alt="Poster for the movie"
        />
      </Link>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired
};

export default Movie;
