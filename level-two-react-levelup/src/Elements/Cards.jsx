import styled from 'styled-components';
import { elevation, transition } from 'Utils';

export const Card = styled.div`
  background-color: white;
  border-radius: 7px;
  padding: 10px 20px;
  ${elevation[3]}
  ${transition({time: '.25s'})}

  &:hover {
    ${elevation[5]}
  }
`;
