import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0.2em;
`;

export const ImgAvatar = styled.img`
  border-radius: 50%;
  width: 30%;
  padding: 30px 0;
`;

export const Description = styled.div`
  text-align: center;
  font-size: 0.8em;
  background-color: #f8f6fa;
  padding: 20px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const Name = styled.p`
  margin: 5px;
  padding: 10px;
  font-weight: bold;
`;

export const Par = styled(Name)`
  font-weight: lighter;
  font-size: 0.7em;
`;
