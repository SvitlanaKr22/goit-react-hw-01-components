import styled from 'styled-components';

export const Td = styled.td`
  padding: 10px 70px;
  text-align: left;
  font-size: 0.8em;
  border-right: 2px solid #e4e1e0;
`;
export const Tr = styled.tr`
  &:nth-child(2n) {
    background-color: rgba(222, 222, 231, 0.5);
  }
`;
