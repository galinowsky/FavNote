import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import withContext from 'hoc/withContext';
// import plusIcon from 'assets/icons/plus.svg';
import { connect } from 'react-redux';
import { addItem } from 'actions';
import { Formik, Form } from 'formik';

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

const StyledDescriptionInput = styled(Input)`
  height: 30vh;
  width: 300px;
  margin: 30px 0px 15px;
  border-radius: 15px;
`;
const newItemBar = ({ pageContext, isVisible, addItem, toggleFunction }) => {
  // const elements = ['note','twitter','article'];
  return (
    <StyledWrapper isVisible={isVisible} color={pageContext}>
      <StyledHeading>Add new {pageContext}</StyledHeading>
      <StyledParagraph>A note requires title and description</StyledParagraph>
      <Formik
        initialValues={{ title: '', content: '', articleUrl: '', twitterName: '', created: '' }}
        onSubmit={values => {
          addItem(pageContext, values);
          toggleFunction();
        }}
      >
        {({ values, handleChange, handleBlur }) => (
          <Form>
            <Input
              type="text"
              name="title"
              placeholder={pageContext === 'twitters' ? 'Account Name' : 'title'}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            ></Input>
            {pageContext === 'twitters' && (
              <Input
                type="text"
                name="twitterName"
                placeholder="Twitters name eg. Bill Gates "
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.twitterName}
              ></Input>
            )}
            {pageContext === 'articles' && (
              <Input
                type="text"
                name="articleUrl"
                placeholder="Link"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.articleUrl}
              ></Input>
            )}

            <StyledDescriptionInput
              type="textarea"
              name="content"
              as="textarea"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.content}
            ></StyledDescriptionInput>
            <StyledButton color={pageContext} type="submit">
              Add note
            </StyledButton>
          </Form>
        )}
      </Formik>
    </StyledWrapper>
  );
};

const mapDispatch = {
  addItem,
};

export default connect(null, mapDispatch)(withContext(newItemBar));

newItemBar.propTypes = {
  pageContext: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  addItem: PropTypes.func.isRequired,
  toggleFunction: PropTypes.func.isRequired,
  // created: PropTypes.string.isRequired,
};
