import React, { Component } from 'react';
import PropTypes from 'prop-types';
// components
import Header from './components/header';
import Player from './components/player';
import AddPlayer from './components/add-player';

class App extends Component {
  state = {
    players: this.props.players
  };

  handleScoreChange = (playerId, delta) => {
    const targetPlayer = this.state.players.find(
      player => player.id === playerId
    );
    targetPlayer.score += delta;
    this.setState(this.state);
  };

  handleRemovePlayer = playerId => {
    const players = this.state.players.filter(player => player.id !== playerId);
    this.setState({ players });
  };

  handleAddPlayer = newPlayer => {
    const players = [...this.state.players, newPlayer];
    this.setState({ players });
  };

  render() {
    const { players } = this.state;

    return (
      <div className="scoreboard">
        <Header players={players} />
        {players.map(player => (
          <Player
            key={player.id}
            player={player}
            onScoreChange={this.handleScoreChange}
            onPlayerRemove={this.handleRemovePlayer}
          />
        ))}
        <AddPlayer onAddPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

App.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired
    })
  )
};

export default App;
