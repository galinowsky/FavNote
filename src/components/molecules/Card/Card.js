import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/icons/link.svg';
import { connect } from 'react-redux';
import { deleteItem } from 'actions';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  min-height: 385px;
  width: 350px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
  /* margin:25px 50px 35px; */
`;

const InnerWrapper = styled.div`
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};
  width: 100%;
  padding: 10px 30px;
  position: relative;
  /* height: 75px; */
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

const StyledHeading = styled(Heading)`
  margin: 10px 0 0;
  padding-right: 25px;
`;
const StyledAvatar = styled.img`
  width: 76px;
  height: 76px;
  border: 5px solid ${({ theme }) => theme.twitters};
  position: absolute;
  right: 15px;
  top: 40px;
  border-radius: 50px;
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
  top: 15px;
`;
const StyledRemoveButton = styled(Button)`
  position: absolute;
  bottom: 10px;
  left: 15px;
`;
const StyledDetailsButton = styled(Button)`
  position: absolute;
  bottom: 10px;
  right: 15px;
`;

class Card extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => {
    this.setState({ redirect: true });
  };

  handleDeleteCardClick = () => {
    const { deleteItem, pageContext, id } = this.props;
    deleteItem(pageContext, id);
  };

  render() {
    const {
      pageContext,
      title,
      // created,
      articleUrl,
      content,
      twitterName,
      id,
    } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${pageContext}/${id}`} />;
    }
    return (
      <StyledWrapper>
        <InnerWrapper activeColor={pageContext}>
          <StyledHeading>{title}</StyledHeading>
          {pageContext === 'twitters' && (
            <StyledAvatar src={`http://twivatar.glitch.me/${twitterName}`} />
          )}
          {pageContext === 'articles' && <StyledLinkButton href={articleUrl} />}
        </InnerWrapper>
        <InnerWrapper flex>
          <Paragraph>{content}</Paragraph>
          <StyledRemoveButton secondary onClick={this.handleDeleteCardClick}>
            remove
          </StyledRemoveButton>
          <StyledDetailsButton secondary onClick={this.handleCardClick}>
            Details
          </StyledDetailsButton>
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}
const mapDispatchToProps = {
  deleteItem,
};

export default connect(null, mapDispatchToProps)(withContext(Card));

Card.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
  pageContext: 'notes',
  twitterName: null,
  articleUrl: null,
};
