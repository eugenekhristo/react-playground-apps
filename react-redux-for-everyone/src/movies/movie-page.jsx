import React, { Component } from 'react';
import Overdrive from 'react-overdrive';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadMovie, resetMovie } from './actions';

// constants
const IMAGE_URL = 'https://image.tmdb.org/t/p/w154';
const BACKDROP_URL = 'https://image.tmdb.org/t/p/w1280';

class MoviePage extends Component {
  moviePageRef = React.createRef();

  render() {
    const { movie } = this.props;

    if (this.moviePageRef.current) {
      const { style: moviePageStyle } = this.moviePageRef.current;
      moviePageStyle.backgroundImage = `url(${BACKDROP_URL}${movie.backdrop_path})`;
    }
    
    return (
      <div className="movie-page" ref={this.moviePageRef}>
        <div className="movie-info">
          <div className="container">
            <Overdrive id={`${movie.id}`}>
              <img
                src={
                  movie.poster_path ? `${IMAGE_URL}${movie.poster_path}` : ''
                }
                alt="Thumbnail of the movie"
                className="movie-info__img"
              />
            </Overdrive>

            <div className="movie-info__desc">
              <h2>{movie.title}</h2>
              <h3>{movie.release_date}</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const { match, loadMovie } = this.props;
    loadMovie(match.params.id);
  }

  componentWillUnmount = () => {
    const { resetMovie } = this.props;
    resetMovie();
  }
  
}

const mapStateToProps = state => ({
  movie: state.movies.movie
});

const bindActionCreatorsToProps = dispatch => bindActionCreators({
  loadMovie,
  resetMovie
}, dispatch);

export default connect(mapStateToProps, bindActionCreatorsToProps)(MoviePage);
