import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import axios from 'axios';
import AuthorizationTemplate from 'templates/AuthorizationTemplate';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledForm = styled(Form)`
  /* padding: 35px 0px; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StyeledButton = styled(Button)`
  margin: 10px 0;
  background-color: ${({ theme }) => theme.notes};
`;

const StyledParagraph = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.bold};
`;
const StyledHeading = styled(Heading)`
  margin: 15px;
  font-size: '3.2rem';
`;
class LoginPage extends Component {
  state = {
    view: 'login',
  };

  handleChangeView = () => {
    console.log(this.state);
    this.setState(prevState => {
      return prevState.view === 'login' ? { view: 'register' } : { view: 'login' };
    });
  };

  render() {
    const { view } = this.state;
    return (
      <AuthorizationTemplate>
        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={({ username, password }) => {
            axios
              .post('http://localhost:9000/api/user/login', { username, password })
              .then(() => console.log('succes in logging'))
              .catch(err => console.log(err));
          }}
        >
          {() => (
            <StyledForm>
              <StyledHeading>Sign In</StyledHeading>
              <Field as={Input} name="username" type="text" placeholder="login"></Field>
              <Field as={Input} name="password" type="password" placeholder="password"></Field>
              <StyeledButton color={({ theme }) => theme.notes} type="submit">
                {view === 'login' ? 'Sign In' : 'Register'}
              </StyeledButton>
            </StyledForm>
          )}
        </Formik>
        <StyledParagraph onClick={() => this.handleChangeView()}>
          I want to {view === 'login' ? 'Register' : 'Log In'}
        </StyledParagraph>
      </AuthorizationTemplate>
    );
  }
}

export default LoginPage;
