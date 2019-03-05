import React, { Component, Fragment } from 'react';
import './App.css';
import Toggle from './Toggle';
import Modal from './Modal';

class App extends Component {
  render() {
    return (
      <div>
        <Toggle>
          {({ on, handleToggle }) => (
            <Fragment>
              <button onClick={handleToggle}>Login</button>
              <Modal on={on} onToggle={handleToggle}>
                <h2>Children of Modal</h2>
                <p>Just some text</p>
              </Modal>
            </Fragment>
          )}
        </Toggle>
      </div>
    );
  }
}

export default App;
