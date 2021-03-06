import { GET_QUOTES, DELETE_QUOTE, ADD_QUOTE, UPDATE_QUOTE } from './actions';

export class Quote {
  constructor(text, author, id = null) {
    this.text = text;
    this.author = author || 'Unknown';
    this.id = id;
  }
}

const initialState = {
  quotes: []
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case GET_QUOTES:
      return { ...state, quotes: payload };

    case DELETE_QUOTE:
      return {
        ...state,
        quotes: state.quotes.filter(quote => quote.id !== payload)
      };

    case ADD_QUOTE:
      return {
        ...state,
        quotes: [...state.quotes, payload]
      };

    case UPDATE_QUOTE:
      return {
        ...state,
        quotes: state.quotes.map(q => (q.id === payload.id ? payload : q))
      };

    default:
      return state;
  }
}
