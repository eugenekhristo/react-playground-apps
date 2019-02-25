import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// action creators
import { toggleMessage } from '../toggle/actions';
import { loadMovies } from '../movies/actions';

const Toggle = ({ isMessageVisible, toggleMessage, loadMovies }) => {
  return (
    <React.Fragment>
      <button onClick={loadMovies}>Load movies</button>
      <button onClick={toggleMessage}>Toggle</button>
      {isMessageVisible && (
        <span style={{ color: '#fff' }}>
          hello you actually can see this message!{' '}
          <span role="img" aria-label="Lips">
            💋
          </span>
        </span>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  isMessageVisible: state.toggle.isMessageVisible
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleMessage,
      loadMovies
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toggle);
