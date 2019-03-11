import React, { Component, Fragment } from 'react';
import { Transition } from 'react-spring/renderprops';
import './App.css';
import { Toggle } from 'Utils';
// import { Modal } from 'Elements';

const Heading = props => {
  return (
    <Fragment>
      <h2 style={props}>Hello</h2>
      <h3 style={props}>{Math.round(props.value)}</h3>
    </Fragment>
  );
};

class App extends Component {
  render() {
    return (
      <div>
        <Toggle>
          {({ on, handleToggle }) => (
            <Fragment>
              <button onClick={handleToggle}>Show / hide</button>
              <Transition
                items={on}
                from={{ opacity: 0, value: 0 }}
                leave={{ opacity: 0, value: 0 }}
                enter={{ opacity: 1, value: 100 }}
              >
                {on => on && Heading}
              </Transition>
            </Fragment>
          )}
        </Toggle>
      </div>
    );
  }
}

export default App;

// {({ on, handleToggle }) => (
//   <Fragment>
//     <button onClick={handleToggle}>Login</button>
//     <Modal on={on} onToggle={handleToggle}>
//       <h2>Children of Modal</h2>
//       <p>Just some text</p>
//     </Modal>
//   </Fragment>
// )}
