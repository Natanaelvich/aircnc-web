/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
  border: 0;
  border-radius: 2px;
  width: 100%;
  height: 43px;
  padding: 0 20px;
  font-size: 16px;
  font-weight: bold;
  background: #f05a5b;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: ${darken(0.03, '#f05a5b')};
  }
`;
