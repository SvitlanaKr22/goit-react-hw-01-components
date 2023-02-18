import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  font-size: 0.6em;
  color: white;
  background-color: ${props => props.color};
  /* width: calc(100% / 5); */
  width: 70px;
`;

export const Span = styled.span`
  font-size: 1.2em;
  margin-top: 10px;
`;
