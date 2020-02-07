/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  margin: 80px auto 0;
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 100%;
    background: #fff;
    margin-top: 50px;
    border-radius: 4px;
    padding: 30px;
  }
`;

export const SpotList = styled.ul`
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 30px;
  li {
    display: flex;
    flex-direction: column;
    header {
      width: 100%;
      height: 120px;
      background-size: contain;
      background-repeat: no-repeat;
      border-radius: 4px;
    }
    strong {
      margin-top: 10px;
      font-size: 15px;
      color: #444;
    }

    span {
      font-size: 15px;
      color: #999;
    }
  }
`;
