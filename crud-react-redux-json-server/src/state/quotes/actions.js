import axios from 'axios';

export const BASE_URL = 'http://localhost:3001';
export const GET_QUOTES = 'GET_QUOTES';
export const DELETE_QUOTE = 'DELETE_QUOTE';

export function getQuotes() {
  return async dispatch => {
    const { data: quotes } = await axios.get(`${BASE_URL}/quotes`);
    return dispatch({
      type: GET_QUOTES,
      payload: quotes
    });
  };
}


export function deleteQuote(id) {
  return async dispatch => {
    await axios.delete(`${BASE_URL}/quotes/${id}`);
    return dispatch({
      type: DELETE_QUOTE,
      payload: id
    });
  };
}