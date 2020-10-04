import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/atoms/Input/Input';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import styled from 'styled-components';
import UserPageTemplate from './UserPageTemplate';

const GridWrappper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 50px;
  padding: 50px 75px 25px 70px;
`;

const StyledPageHeader = styled.div`
  padding: 35px 65px 10px;
  width: 90vw;
`;
const StyledHeading = styled(Heading)`
  margin: 15px 0 0 0;
  ::first-letter {
    text-transform: uppercase;
  }
`;
const StyledParagraph = styled(Paragraph)`
  margin: 0 0 0 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const GridTemplate = ({ children, pageType }) => (
  <>
    <UserPageTemplate pageType={pageType}>
      <StyledPageHeader>
        <Input search />
        <StyledHeading big as="h1">
          {pageType}s
        </StyledHeading>
        <StyledParagraph>6 {pageType}s</StyledParagraph>
      </StyledPageHeader>
      <GridWrappper>{children}</GridWrappper>
    </UserPageTemplate>
  </>
);

export default GridTemplate;

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageType: 'notes',
};
