import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const SignedInlinks = () => {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/create-project">New Project</NavLink>
        </li>
        <li>
          <Link to="/">Log Out</Link>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating pink lighten-1">
            NN
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedInlinks;
