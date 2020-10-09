import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/atoms/Input/Input';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import styled from 'styled-components';
import withContext from 'hoc/withContext';
import UserPageTemplate from './UserPageTemplate';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg'

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
const StyledButtonIcon = styled(ButtonIcon)`
position:fixed;
bottom:40px;
right:40px;
border-radius:50%;
background-color:${({activeColor, theme}) => theme[activeColor]};
background-size:37%;

`

const GridTemplate = ({ children, pageContext }) => (
  <>
    <UserPageTemplate pageContext={pageContext}>
      <StyledPageHeader>
        <Input search />
        <StyledHeading big as="h1">
          {pageContext}
        </StyledHeading>
        <StyledParagraph>6 {pageContext}</StyledParagraph>
      </StyledPageHeader>
      <GridWrappper>{children}</GridWrappper>
      <StyledButtonIcon icon={plusIcon} activeColor={pageContext} />
    </UserPageTemplate>
  </>
);

export default withContext(GridTemplate);

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageContext: 'notes',
};
