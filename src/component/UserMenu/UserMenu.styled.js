import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  margin-left: 16px;
`;

export const Button = styled.button`
  color: white;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    border: 1px solid white;
  }
  span {
    margin-right: 6px;
  }
`;

export const Span = styled.span`
  color: rgb(27, 223, 230);
  margin-right: 15px;
  line-height: 36px;

  svg {
    vertical-align: text-top;
  }
`;
