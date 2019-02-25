import { TOGGLE_MESSAGE } from './actions';

const initialState = {
  isMessageVisible: false
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case TOGGLE_MESSAGE:
      return { ...state, isMessageVisible: !state.isMessageVisible };

    default:
      return state;
  }
}
