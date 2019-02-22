import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

class AddPlayer extends Component {
  state = { name: '' };

  handleOnChange = ({ target }) => {
    const name = target.value;
    this.setState({ name });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const newPlayer = { name: this.state.name, score: 0, id: uuid() };
    this.setState({ name: '' });
    this.props.onAddPlayer(newPlayer);
  };

  render() {
    const { name } = this.state;

    return (
      <div className="add-player-form">
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            placeholder="name of a new player"
            name="name"
            value={name}
            onChange={this.handleOnChange}
          />
          <input type="submit" value="add player" />
        </form>
      </div>
    );
  }
}

AddPlayer.propTypes = {
  onAddPlayer: PropTypes.func.isRequired
};

export default AddPlayer;
