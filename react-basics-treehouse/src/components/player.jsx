import React from 'react';
import PropTypes from 'prop-types';
// components
import Counter from './counter';

const Player = ({ player, onScoreChange, onPlayerRemove }) => {
  return (
    <div className="player">
      <div className="player-name">
        <span className="remove-player" onClick={() => onPlayerRemove(player.id)}>&chi;</span>
        {player.name}
      </div>
      <Counter
        score={player.score}
        onScoreChange={delta => onScoreChange(player.id, delta)}
      />
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
  }),
  onScoreChange: PropTypes.func.isRequired,
  onPlayerRemove: PropTypes.func.isRequired,
};

export default Player;
