import React, { Component } from 'react';
import { Portal } from 'Utils';
import styled from 'styled-components';
import Icon from './Icon';
import { Card } from './Cards';
import { colors } from 'Utils';

class Modal extends Component {
  render() {
    const { children, on, onToggle } = this.props;

    return (
      <Portal>
        {on && (
          <Overlay onClick={onToggle}>
            <ModalCard>
              <CloseBtn onClick={onToggle}>
                <Icon name="close" color={colors.yellow} />
              </CloseBtn>
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

const ModalCard = styled(Card)`
  position: relative;
  min-width: 320px;
  transform: translateY(-15vh);
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
