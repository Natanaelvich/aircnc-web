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

    p {
      font-size: 22px;
      line-height: 30px;
      margin-bottom: 30px;
    }

    form {
      display: flex;
      flex-direction: column;

      label {
        font-size: 14px;
        color: #444;
        font-weight: bold;
        margin-bottom: 8px;
      }

      input {
        margin-bottom: 20px;
        border: 1px solid #ddd;
        border-radius: 2px;
        height: 45px;
        padding: 0 15px;
        font-size: 16px;
      }
    }
  }
`;
