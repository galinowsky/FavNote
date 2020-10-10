import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import withContext from 'hoc/withContext';
import plusIcon from 'assets/icons/plus.svg';

const StyledWrapper = styled.div`
  height: 70vh;
  width: 390px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 25px 25px 35px 25px;
  position: relative;
  border-left: 5px solid ${({ theme, color }) => theme[color]};
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 0px;
`;
const StyledParagraph = styled(Paragraph)`
  margin-top: 0px;
`;
const StyledButton = styled(Button)`
  /* margin-top:15px; */
`;
const StyledButtonIcon = styled(ButtonIcon)`
  position: absolute;
  bottom: 25px;
  right: 45px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-size: 30%;
`;

const StyledDescriptionInput = styled(Input)`
  height: 300px;
  width: 300px;
  margin: 30px 0px 15px;
  border-radius: 15px;
`;
const newItemBar = ({ pageContext }) => {
  return (
    <StyledWrapper color={pageContext}>
      <StyledHeading>Add new Note</StyledHeading>
      <StyledParagraph>A note requires title and description</StyledParagraph>
      <Input placeholder="Title"></Input>
      <StyledDescriptionInput placeholder="Description"></StyledDescriptionInput>
      <StyledButton>Add note</StyledButton>
      <StyledButtonIcon icon={plusIcon} color={pageContext}></StyledButtonIcon>
    </StyledWrapper>
  );
};

export default withContext(newItemBar);
