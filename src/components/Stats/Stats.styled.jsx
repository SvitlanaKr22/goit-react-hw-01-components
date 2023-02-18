import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc((100%-30px) / 3);
  text-align: center;
  background-color: #f3edec;
  line-height: 1.5;
  padding: 24px 0;
  border: 1px solid #dad3d2;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
`;

export const Span = styled.span`
  font-size: 0.5em;
  font-weight: ${props => props.bold && 'bold'};
`;
