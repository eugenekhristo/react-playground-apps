import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const PLAYERS = [
  { name: 'Serj Tankian', score: 3, id: 'sf324562x' },
  { name: 'Millie Bobby Brown', score: 5, id: 'sf3242352x' },
  { name: 'Daron Malakian', score: 2, id: 'sf256124562x' }
];

ReactDOM.render(<App players={PLAYERS} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
