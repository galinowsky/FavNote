import React from 'react';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import axios from 'axios';
import AuthorizationTemplate from 'templates/AuthorizationTemplate';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StyeledButton = styled(Button)`
  background-color: ${({ theme }) => theme.notes};
`;
const LoginPage = () => (
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
          <Heading>Sign In</Heading>
          <Field as={Input} name="username" type="text" placeholder="login"></Field>
          <Field as={Input} name="password" type="password" placeholder="password"></Field>
          <StyeledButton color={({ theme }) => theme.notes} type="submit">
            Register
          </StyeledButton>
        </StyledForm>
      )}
    </Formik>
  </AuthorizationTemplate>
);

export default LoginPage;
