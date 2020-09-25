import React from 'react';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  min-height: 385px;
  width: 300px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  background-color: ${({ yellow, theme }) => (yellow ? theme.primary : 'white')};
  width: 100%;
  padding: 10px 30px;
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: start;
    `}
`;
const DateInfo = styled(Paragraph)`
  margin: 0 0 10px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;
const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const Card = () => (
  <StyledWrapper>
    <InnerWrapper yellow>
      <StyledHeading>My example Card</StyledHeading>
      <DateInfo>3 days</DateInfo>
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        Excepteur laboris non quis enim non minim velit nulla incididunt duis. Aute amet officia
        deserunt exercitation et magna ipsum ea ea cillum anim dolor. Duis ad Lorem sit laboris
        officia culpa ex minim anim Lorem do qui fugiat nostrud.
      </Paragraph>
      <Button secondary>remove</Button>
    </InnerWrapper>
  </StyledWrapper>
);
export default Card;
