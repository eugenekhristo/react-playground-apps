import axios from 'axios';

export const BASE_URL = 'http://localhost:3001';
export const GET_QUOTES = 'GET_QUOTES';

export function getQuotes() {
  return async dispatch => {
    const { data: quotes } = await axios.get(`${BASE_URL}/quotes`);
    return dispatch({
      type: GET_QUOTES,
      payload: quotes
    });
  };
}
