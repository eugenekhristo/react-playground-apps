import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// styles
import './App.scss';
// components
import Header from './header';
import MoviesPage from './movies/movies-page';
import MoviePage from './movies/movie-page';
import Toggle from './toggle/Toggle';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <Toggle /> */}
        <Switch>
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/movies" component={MoviesPage} />
          <Redirect exact from="/" to="/movies" />
        </Switch>
      </React.Fragment>
    );
  }

  componentDidMount = () => {
    localStorage.clear();
  }
}

export default App;
