import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import withContext from 'hoc/withContext';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';

const StyledWrapper = styled.div`
  padding: 25px 25px 25px 150px;
  position: relative;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 85px;

  @media (max-width: 1500px) {
    grid-gap: 45px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;
const StyledButtonIcon = styled(ButtonIcon)`
  background-size: 35%;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  position: fixed;
  bottom: 35px;
  right: 35px;
  z-index: 9999;
`;
class GridTemplate extends Component {
  state = {
    isItemBarVisible: false,
  };

  handleNewItemBarToggle = () => {
    this.setState(prevState => ({
      isItemBarVisible: !prevState.isItemBarVisible,
    }));
  };

  render() {
    const { children, pageContext } = this.props;
    const { isItemBarVisible } = this.state;

    const ViewWrapper = styled.div`
     /* padding-right:25px;
     display: grid;
     grid-template-columns: 2fr ${isItemBarVisible && `400px`}; */
   `;

    return (
      <UserPageTemplate>
        <StyledWrapper>
          <StyledPageHeader>
            <Input search placeholder="Search" />
            <StyledHeading big as="h1">
              {pageContext}
            </StyledHeading>
            <StyledParagraph>6 {pageContext}</StyledParagraph>
          </StyledPageHeader>
          <ViewWrapper>
            <StyledGrid>{children}</StyledGrid>
            {/* <NewItemBar pageContext = {pageContext}/> */}
            <NewItemBar
              pageContext={pageContext}
              isVisible={isItemBarVisible}
              toggleFunction={this.handleNewItemBarToggle}
            />
            <StyledButtonIcon
              icon={plusIcon}
              color={pageContext}
              onClick={() => this.handleNewItemBarToggle()}
            />
          </ViewWrapper>
        </StyledWrapper>
      </UserPageTemplate>
    );
  }
}
// const GridTemplate = ({ children, pageContext }) => (
// );

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageContext: 'notes',
};

export default withContext(GridTemplate);
