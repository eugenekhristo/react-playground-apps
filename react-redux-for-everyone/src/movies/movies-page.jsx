import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// components
import Movie from './movie';
// actions
import { loadMovies } from './actions';

class MoviesPage extends Component {
  render() {
    const { movies } = this.props;

    return (
      <div className="movies container">
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} {...this.props} />
        ))}
      </div>
    );
  }

  componentDidMount() {
    const { loadMovies } = this.props;
    loadMovies();
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies
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
