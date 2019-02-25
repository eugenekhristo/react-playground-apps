import axios from 'axios';

export const LOAD_MOVIES = 'LOAD_MOVIES';

export function loadMovies() {
  return async dispatch => {
    const moviesBlob = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?api_key=d5b443a2673ed0b0942a61242f8cec8d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
    );
    const { results: movies } = moviesBlob.data;

    return dispatch({
      type: LOAD_MOVIES,
      payload: movies
    });
  };
}
