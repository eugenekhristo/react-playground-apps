import axios from 'axios';

export const LOAD_MOVIES = 'LOAD_MOVIES';
export const LOAD_MOVIE = 'LOAD_MOVIE';
export const RESET_MOVIE = 'RESET_MOVIE';

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

export function loadMovie(id) {
  return async dispatch => {
    const { data: movie } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=d5b443a2673ed0b0942a61242f8cec8d&language=en-US`
    );

    return dispatch({
      type: LOAD_MOVIE,
      payload: movie
    })
  }
}

export function resetMovie() {
  return {
    type: RESET_MOVIE
  }
}