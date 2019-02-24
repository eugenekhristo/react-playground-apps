import React from 'react';
import { connect } from 'react-redux';

const Toggle = () => {
  return <button>Toggle</button>;
};

const mapStateToProps = state => ({
  isMessageVisible: state.message.isMessageVisible
})

export default connect(mapStateToProps)(Toggle);
