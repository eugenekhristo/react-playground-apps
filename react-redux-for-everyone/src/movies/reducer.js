import { LOAD_MOVIES } from './actions';

const initialState = {
  movies: [],
  isMoviesLoaded: false
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case LOAD_MOVIES:
      return { ...state, movies: payload, isMoviesLoaded: true };

    default:
      return state;
  }
}
