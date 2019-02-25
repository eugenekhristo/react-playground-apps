import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// components
import Movie from './movie';
// actions
import { loadMovies } from './actions';

class MoviesPage extends Component {
  render() {
    const { movies, isMoviesLoaded } = this.props;

    if (!isMoviesLoaded) {
      return <h2 style={{color: 'hotpink'}}>Loading...</h2>
    }

    return (
      <div className="movies container">
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} {...this.props} />
        ))}
      </div>
    );
  }

  componentDidMount() {
    const { loadMovies, isMoviesLoaded } = this.props;
    if (!isMoviesLoaded) {
      loadMovies();
    }
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies,
  isMoviesLoaded: state.movies.isMoviesLoaded,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadMovies
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesPage);
