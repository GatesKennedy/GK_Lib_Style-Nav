import React from 'react';
import styled from 'styled-components';

const MainCont = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-content: center;

  height: 86px;
  margin: 0px 0px 0px 16px;
`;
const Title = styled.h3`
  margin-bottom: 8px;
`;
const Summary = styled.p`
  margin: 0px 0px 0px 16px;
`;

const Separator = ({ _title, _text }) => {
  return (
    <MainCont>
      <Title>{_title}</Title>
      <Summary>{_text}</Summary>
    </MainCont>
  );
};

export default Separator;
