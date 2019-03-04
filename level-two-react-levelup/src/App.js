import React, { Component } from 'react';
import './App.css';
import Toggle from './Toggle';

class App extends Component {
  render() {
    return (
      <div>
        <Toggle render={({on, handleToggle}) => {
          return (
            <div>
              <button onClick={handleToggle}>Show / hide</button>
              {on &&  <h1>Hello World 😍</h1>}
            </div>
          );
        }} />
      </div>
    );
  }
}

export default App;
