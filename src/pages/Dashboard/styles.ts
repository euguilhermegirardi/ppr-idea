import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const TitleContainer = styled.div`
  background: #DFE4EE;
  border-radius: 5px;
  width: 15rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: flex-start;

  &:hover {
      background: ${shade(0.2, '#DFE4EE')};
    }
`;

export const Title = styled.h1`
  font-size: 30px;
  color: #031795;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;
  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    background-color: #DFE4EE;
    border-right: 0;
    ${props =>
    props.hasError &&
    css`
        border-color: #c53030;
      `}
    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    width: 90px;
    height: 70px;
    background-color: #fff;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #031795;
    font-weight: bold;
    transition: background 0.4s;
    &:hover {
      background: ${shade(0.2, '#DFE4EE')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;
  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    box-shadow: -6px 7px 14px -5px #a8a8b3;
    display: flex;
    align-items: center;
    transition: transform 0.5s;
    & + a {
      margin-top: 16px;
    }
    &:hover {
      transform: translateX(30px);
    }
    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
    div {
      margin: 0 16px;
      flex: 1;
      strong {
        font-size: 20px;
        color: #031795;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #031795;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 30px;
`;