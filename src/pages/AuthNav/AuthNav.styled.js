import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Links = styled(Link)`
  color: black;
  text-decoration: none;
  display: block;
  margin: 0 auto;
  cursor: pointer;
  font-size: 16px;
  padding: 14px;
  transition: all linear 200ms;
  &:first-child {
    border-bottom: 1px solid rgb(53, 64, 95);
  }
  &:hover {
    background-color: rgb(53, 64, 95);
    color: rgb(255, 255, 255);
  }
  &:last-child {
    border-bottom-left-radius: 13px;
    border-bottom-right-radius: 13px;
  }
  @media (min-width: 768px) {
    font-size: 22px;
  }
  @media (min-width: 1096px) {
    font-size: 28px;
  }
`;
export const Container = styled.div`
  border: 1px solid rgb(53, 64, 95);
  border-radius: 15px;
  text-align: center;
  width: 280px;
  background-color: whitesmoke;
  margin: 0 auto 26px;
  @media (min-width: 768px) {
    width: 600px;
  }
  @media (min-width: 1096px) {
    width: 700px;
  }
`;

export const Text = styled.h3`
  color: rgb(48, 48, 48);
  font-size: 20px;
  border-bottom: 2px solid rgb(53, 64, 95);
  margin: 0;
  padding: 20px 0 20px;
  @media (min-width: 768px) {
    font-size: 30px;
    padding: 30px 0 30px;
    border-bottom: 3px solid rgb(53, 64, 95);
  }
  @media (min-width: 1096px) {
    font-size: 36px;
    border-bottom: 4px solid rgb(53, 64, 95);
  }
`;
