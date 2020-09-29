import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/icons/link.svg';

// const CARD_TYPE = {
//   note: 'NOTE',
//   twitter: 'TWITTER',
//   article: 'ARTICLE',
// };

const StyledWrapper = styled.div`
  min-height: 385px;
  width: 350px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};
  width: 100%;
  padding: 10px 30px;
  position: relative;
  height: 75px;
  :first-of-type {
    z-index: 2000;
  }
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
const StyledAvatar = styled.img`
  width: 76px;
  height: 76px;
  border: 5px solid ${({ theme }) => theme.twitter};
  position: absolute;
  right: 15px;
  top: 40px;
  border-radius: 50px;
  /* z-index:1000; */
  /* background-image: url('https://unavatar.now.sh/twitter/edent'); */
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: white url(${LinkIcon}) no-repeat;
  background-size: 50%;
  background-position: 50%;
  position: absolute;
  right: 15px;
  top: 30px;
`;

const Card = ({ cardType }) => (
  <StyledWrapper>
    <InnerWrapper activeColor={cardType}>
      <StyledHeading>My example Card</StyledHeading>
      <DateInfo>3 days</DateInfo>
      {cardType === 'twitter' && <StyledAvatar src="https://unavatar.now.sh/twitter/edent" />}
      {cardType === 'article' && <StyledLinkButton />}
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

Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

Card.defaultProps = {
  cardType: 'note',
};
