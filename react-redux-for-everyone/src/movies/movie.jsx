import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Overdrive from 'react-overdrive';
// constants
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w154';

const Movie = ({ movie = {}, match }) => {
  return (
    <Link to={`/movies/${movie.id}`}>
      <Overdrive id={`${movie.id}`}>
        <img
          className="movie"
          src={`${IMAGE_PATH}${movie.poster_path}`}
          alt="Poster for the movie"
        />
      </Overdrive>
    </Link>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired
};

export default Movie;
