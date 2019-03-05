import React, { Component } from 'react';
import Portal from './Portal';
import styled from 'styled-components';

class Modal extends Component {
  render() {
    const { children, on, onToggle } = this.props;

    return (
      <Portal>
        {on && (
          <Overlay onClick={onToggle}>
            <ModalCard>
              <CloseBtn onClick={onToggle}>Close</CloseBtn>
              {children}
            </ModalCard>
          </Overlay>
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
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled.div`
  position: relative;
  background-color: white;
  border-radius: 7px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  min-width: 320px;
  transform: translateY(-15vh);
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;

export default Modal;
