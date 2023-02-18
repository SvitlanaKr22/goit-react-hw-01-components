import styled from 'styled-components';

export const Table = styled.table`
  background-color: #fafaf8ef;
  font-size: 0.5em;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Thead = styled.thead`
  background-color: rgba(104, 104, 248, 0.8);
  font-weight: bold;
  text-transform: uppercase;
  color: white;
`;

export const Th = styled.th`
  padding: 10px 70px;
  border-right: 2px solid;
  &:last-child {
    border-right: none;
  }
`;
