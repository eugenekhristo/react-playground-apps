import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// action creators
import { toggleMessage } from './state/actions';

const Toggle = ({ isMessageVisible, toggleMessage }) => {
  return (
    <React.Fragment>
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
  isMessageVisible: state.message.isMessageVisible
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleMessage
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toggle);
