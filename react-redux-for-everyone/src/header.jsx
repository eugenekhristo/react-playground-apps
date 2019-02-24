import React from 'react';
import logo from './logo.svg';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
     <Link to="/movies">
      <img src={logo} alt="App logo" className="header__logo" />
     </Link>
    </header>
  );
};

export default Header;
