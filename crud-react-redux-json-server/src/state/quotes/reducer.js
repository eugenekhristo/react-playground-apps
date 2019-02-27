import { GET_QUOTES } from './actions';

export class Quote {
  constructor(text, author = 'Unknown') {
    this.text = text;
    this.author = author;
  }
}

const initialState = {
 quotes: []
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case GET_QUOTES:
      return {...state, quotes: payload};
  
    default:
      return state;
  }
}
