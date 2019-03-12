import React, { Component } from 'react';
import { Portal } from 'Utils';
import styled from 'styled-components';
import Icon from './Icon';
import { Card } from './Cards';
import { colors } from 'Utils';
// spring
import { Transition, animated } from 'react-spring/renderprops';

class Modal extends Component {
  render() {
    const { children, on, onToggle } = this.props;

    return (
      <Portal>
        {on && (
          <Transition
            native
            items={on}
            from={{ opacity: 0, bgPpacity: 0, y: -25 }}
            enter={{ opacity: 1, bgPpacity: 0.5, y: 0 }}
            leave={{ opacity: 0, bgPpacity: 0, y: -25 }}
          >
            {on =>
              on &&
              (styles => (
                <Overlay onClick={onToggle}>
                  <ModalCard
                    style={{
                      opacity: styles.opacity,
                      // in order to use native API we need to use interpolate function instead of just styles.y
                      transform: styles.y.interpolate(y => `translate3D(0,${y}px,0)`)
                    }}
                  >
                    <CloseBtn onClick={onToggle}>
                      <Icon name="close" color={colors.black} />
                    </CloseBtn>
                    {children}
                  </ModalCard>
                  <Background style={{ opacity: styles.bgPpacity }} />
                </Overlay>
              ))
            }
          </Transition>
        )}
      </Portal>
    );
  }
}

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled(animated.div)`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

// it says please apply all styles from Card to new HTML Element (in this case animated one)
// when Transition spring native = then we need animated.div to work smootly
const AnimCard = Card.withComponent(animated.div);
const ModalCard = styled(AnimCard)`
  position: relative;
  min-width: 320px;
  /* transform: translateY(-15vh); */
  z-index: 1000;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 5px;
`;

export default Modal;
