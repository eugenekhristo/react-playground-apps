import { LOAD_MOVIES } from './actions';

const initialState = {
  movies: []
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case LOAD_MOVIES:
      return { ...state, movies: payload };

    default:
      return state;
  }
}
