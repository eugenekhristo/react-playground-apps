import {combineReducers} from 'redux';
import toggle from './toggle/reducer';
import movies from './movies/reducer';

export default combineReducers({
  toggle,
  movies
});