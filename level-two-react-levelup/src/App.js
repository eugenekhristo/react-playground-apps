import React, { Component } from 'react';
import './App.css';
import Toggle from './Toggle';

class App extends Component {
  render() {
    return (
      <div>
        <Toggle>
          <h1>Hello 🐱‍👤</h1>
        </Toggle>
      </div>
    );
  }
}

export default App;
