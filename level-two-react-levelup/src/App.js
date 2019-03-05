import React, { Component, Fragment } from 'react';
import './App.css';
import Toggle from './Toggle';
import Portal from './Portal';

class App extends Component {
  render() {
    return (
      <div>
        <Toggle>
          {({ on, handleToggle }) => (
            <Fragment>
              <button onClick={handleToggle}>Show / hide</button>
              {on && <h1>Hello World 😍</h1>}

              <Portal>{on && <h2>Hi i'm from Portal!!! 🐷</h2>}</Portal>
            </Fragment>
          )}
        </Toggle>
      </div>
    );
  }
}

export default App;
