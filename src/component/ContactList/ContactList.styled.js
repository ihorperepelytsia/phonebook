import styled from 'styled-components';
export const List = styled.ul`
  list-style: none;
  padding: 10px;
`;
export const Items = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 4px;
  border-bottom: 1px solid rgb(53, 64, 95);

  &:last-child {
    border-bottom: none;
  }
`;
export const Text = styled.div`
  width: 120px;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  margin: 0;
  @media (min-width: 768px) {
    width: 100%;
  }
`;
export const NumberPhone = styled.p`
  word-break: break-all;
`;
export const NameContact = styled.p`
  word-break: break-all;
`;
export const Button = styled.button`
  border: none;
  color: white;
  background-color: rgb(53, 64, 95);
  padding: 1px 11px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    background-color: rgb(0, 60, 255);
  }
  svg {
    vertical-align: text-top;
  }
`;

export const Spinner = styled.div`
  width: 80px;
  margin: 0 auto;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
`;
