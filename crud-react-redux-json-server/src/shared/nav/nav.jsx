import './nav.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="nav">
    <NavLink className="nav__logo" to="/quotes">

        Quotes and Thought
</NavLink>
    <ul className="nav__list">
      <li className="nav__item">
        <NavLink className="nav__link" to="/quotes/add-new">

            Add Quote
</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
