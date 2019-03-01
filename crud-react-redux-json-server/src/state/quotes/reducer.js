import { GET_QUOTES, DELETE_QUOTE, ADD_QUOTE } from './actions';

export class Quote {
  constructor(text, author) {
    this.text = text;
    this.author = author || 'Unknown';
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

    default:
      return state;
  }
}
