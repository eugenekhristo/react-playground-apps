import React from 'react';
import PropTypes from 'prop-types';
import Stopwatch from './stopwatch';

const Header = ({ title, players }) => {
  const totalScore = players.reduce((sum, x) => sum + x.score, 0);

  return (
    <header className="header">
      <table className="stats">
        <tbody>
          <tr>
            <td>players: </td>
            <td>{players.length}</td>
          </tr>
          <tr>
            <td>total points: </td>
            <td>{totalScore}</td>
          </tr>
        </tbody>
      </table>
      <h1>{title}</h1>
      <Stopwatch />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired
    })
  )
};

Header.defaultProps = {
  title: 'Scoreboard'
};

export default Header;
