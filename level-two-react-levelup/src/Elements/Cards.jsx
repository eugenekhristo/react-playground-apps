import styled from 'styled-components';
import { elevation, transition } from 'Utils';

export const Card = styled.div`
  background-color: white;
  border-radius: 7px;
  padding: 10px 20px;
  max-width: 300px;
  overflow: hidden;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${elevation[3]}
  ${transition({time: '.25s', property: 'box-shadow'})}

  &:hover {
    ${elevation[5]}
  }
`;
