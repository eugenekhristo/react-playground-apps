import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ score, onScoreChange }) => {
  return (
    <div className="counter">
      <button
        className="counter-action decrement"
        onClick={() => onScoreChange(-1)}
      >
        -
      </button>
      <span className="counter-score">{score}</span>
      <button
        className="counter-action increment"
        onClick={() => onScoreChange(1)}
      >
        +
      </button>
    </div>
  );
};

Counter.propTypes = {
  score: PropTypes.number.isRequired,
  onScoreChange: PropTypes.func.isRequired
};

export default Counter;
