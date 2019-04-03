import React, { Component, Fragment } from 'react';
import './App.css';
import { Toggle } from 'Utils';
import { Card, Modal } from 'Elements';
// spring
// import { Transition } from 'react-spring/renderprops';

// const JustCard = ({ styles, name }) => {
//   return (
//     <Card style={styles}>
//       <h2>{name}</h2>
//     </Card>
//   );
// };

class App extends Component {
  render() {
    return (
      <Fragment>
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
      </Fragment>
    );
  }
}

export default App;

// {({ on, handleToggle }) => (
//   <Fragment>
//     <button onClick={handleToggle}>Show / hide</button>
//     <Transition
//       items={on}
//       from={{ opacity: 0, height: '0px', backgroundColor: 'red' }}
//       enter={{ opacity: 1, height: '100px', backgroundColor: 'cyan' }}
//       leave={{ opacity: 0, height: '0px', backgroundColor: 'red' }}
//     >
//       {on => on && (styles => <JustCard styles={styles} name={'Eugene'} />)}
//     </Transition>
//   </Fragment>
// )}
