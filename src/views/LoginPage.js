import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

const LoginPage = () => (
  <div>
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={({ username, password }) => {
        console.log({ username, password });
        axios
          .post('http://localhost:9000/api/user/login', { username, password })
          .then(() => console.log('succes in logging'))
          .catch(err => console.log(err));
      }}
    >
      {() => (
        <Form>
          <Field name="username" type="text"></Field>
          <Field name="password" type="password"></Field>
          <button type="submit">sign in</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default LoginPage;
