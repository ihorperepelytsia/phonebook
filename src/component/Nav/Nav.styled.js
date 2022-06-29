import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 26px 16px;
  border-bottom: 1px solid grey;
  background-color: rgb(53, 64, 95);
  color: rgb(255, 255, 255);
  margin-bottom: 40px;
`;

export const Logo = styled(Link)`
  font-size: 30px;
  text-decoration: none;
  color: blue;
  margin: 0;
  transition: all linear 400ms;
  color: rgb(255, 255, 255);
`;
