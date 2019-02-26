import React, { Component } from 'react';
import './App.scss';
// containers
import QuotePage from './pages/quotes/containers/quote-page/quote-page';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="nav">
          <span className="nav__logo">Quotes and Thought</span>
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link" href="#">Add Quote</a>
            </li>
          </ul>
        </nav>
        <div className="container">
          <QuotePage />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
