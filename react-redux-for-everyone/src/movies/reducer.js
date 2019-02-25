import { LOAD_MOVIES, LOAD_MOVIE, RESET_MOVIE } from './actions';

const initialState = {
  movies: [],
  movie: {},
  isMoviesLoaded: false
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case LOAD_MOVIES:
      return { ...state, movies: payload, isMoviesLoaded: true };
    case LOAD_MOVIE:
      return { ...state, movie: payload };
    case RESET_MOVIE:
      return { ...state, movie: {} };

    default:
      return state;
  }
}
