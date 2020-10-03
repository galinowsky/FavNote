import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import Input from 'components/atoms/Input/Input';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';

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

const UserPageTemplate = ({ children, pageType }) => (
  <>
    <Sidebar pageType={pageType} />
    <StyledPageHeader>
      <Input search />
      <StyledHeading big as="h1">
        {pageType}s
      </StyledHeading>
      <StyledParagraph>6 {pageType}s</StyledParagraph>
    </StyledPageHeader>
    <GridWrappper>{children}</GridWrappper>
  </>
);

export default UserPageTemplate;

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

UserPageTemplate.defaultProps = {
  pageType: 'note',
};
