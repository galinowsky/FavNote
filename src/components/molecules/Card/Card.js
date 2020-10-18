import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/icons/link.svg';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'actions';
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
  top: 15px;
`;

class Card extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const {
      pageContext,
      title,
      // created,
      articleUrl,
      content,
      twitterName,
      id,
      removeItem,
    } = this.props;
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to={`${pageContext}/${id}`} />;
    }
    // {console.log(this.state)}
    return (
      <StyledWrapper onClick={this.handleCardClick}>
        <InnerWrapper activeColor={pageContext}>
          <StyledHeading>{title}</StyledHeading>
          {/* <DateInfo>{created}</DateInfo> */}
          {/* <StyledAvatar src={`http://twivatar.glitch.me/${twitterName}`} /> */}
          {pageContext === 'twitters' && (
            <StyledAvatar src={`http://twivatar.glitch.me/${twitterName}`} />
          )}
          {pageContext === 'articles' && <StyledLinkButton href={articleUrl} />}
        </InnerWrapper>
        <InnerWrapper flex>
          <Paragraph>{content}</Paragraph>
          <Button secondary onClick={() => removeItem(pageContext, id)}>
            remove
          </Button>
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return{

  removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id)),
}};

export default connect(null, mapDispatchToProps)(withContext(Card));

Card.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  // created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
  pageContext: 'notes',
  twitterName: null,
  articleUrl: null,
};
