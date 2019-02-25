import { TOGGLE_MESSAGE, LOAD_MOVIES } from './actions';

const initialState = {
  isMessageVisible: false,
  movies: []
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case TOGGLE_MESSAGE:
      return { ...state, isMessageVisible: !state.isMessageVisible };

    case LOAD_MOVIES:
      return { ...state, movies: payload };

    default:
      return state;
  }
}
