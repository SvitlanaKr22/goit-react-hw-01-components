import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 24px;
  padding: 5px 70px 5px 20px;
  font-size: 0.8em;
  margin-bottom: 10px;
  background-color: #ebebee;
  border-radius: 4px;
  box-shadow: 0 2px 3px rgba(41, 40, 40, 1);
`;

export const Span = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : '#fa300c')};
`;
