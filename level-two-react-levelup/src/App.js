import React, { Component, Fragment } from 'react';
import './App.css';
import Toggle from './Toggle';

class App extends Component {
  render() {
    return (
      <div>
        <Toggle>
          {({ on, handleToggle }) => (
            <Fragment>
              <button onClick={handleToggle}>Show / hide</button>
              {on && <h1>Hello World 😍</h1>}
            </Fragment>
          )}
        </Toggle>
      </div>
    );
  }
}

export default App;
