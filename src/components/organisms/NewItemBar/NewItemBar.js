import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import withContext from 'hoc/withContext';
import plusIcon from 'assets/icons/plus.svg';
import { connect } from 'react-redux';
import {addItem as addItemAction} from 'actions';

const StyledWrapper = styled.div`
  z-index: 3999;

  height: 100%;
  width: 390px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 100px 25px 35px 25px;
  position: fixed;
  right: 0;
  top: 0;
  border-left: 5px solid ${({ theme, color }) => theme[color]};
  background-color: white;
  transform: translate(${({ isVisible }) => (isVisible ? `0` : `100%`)});
  transition: transform 1s ease-in-out;
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
  position: fixed;
  bottom: 35px;
  right: 35px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-size: 30%;
`;

const StyledDescriptionInput = styled(Input)`
  height: 300px;
  width: 300px;
  margin: 30px 0px 15px;
  border-radius: 15px;
`;
const newItemBar = ({ pageContext, isVisible, addItem }) => {
  // const elements = ['note','twitter','article'];
  return (
    <StyledWrapper isVisible={isVisible} color={pageContext}>
      <StyledHeading>Add new {pageContext}</StyledHeading>
      <StyledParagraph>A note requires title and description</StyledParagraph>
      <Input placeholder={pageContext === 'twitters' ? 'Account Name' : 'title'}></Input>
      {pageContext === 'articles' && <Input placeholder="Link"></Input>}
      {/* {pageContext === 'twitters' && <Input placeholder="Twitter Link"></Input>} */}

      <StyledDescriptionInput placeholder="Description" as="textarea"></StyledDescriptionInput>
      <StyledButton color={pageContext} onClick={() => addItem(pageContext,{
        title: 'jaja',
        content: 'jajajajajajajajja'
      })}>Add note</StyledButton>
      {/* <StyledButtonIcon icon={plusIcon} color={pageContext}></StyledButtonIcon> */}
    </StyledWrapper>
  );
};

const mapDispatch = (dispatch) => {
  return {

    addItem:(itemType, itemContent) => dispatch(addItemAction(itemType, itemContent))
  }

};

export default connect(null, mapDispatch)(withContext(newItemBar));
