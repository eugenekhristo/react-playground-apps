import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// styles
import './App.scss';
// components
import Header from './header';
import MoviesPage from './movies-page';
import MoviePage from './movie-page';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/movies/:id" component={MoviePage} />
            <Route path="/movies" component={MoviesPage} />
            <Redirect exact from="/" to="/movies" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
