import React from 'react';
import { Link } from 'react-router-dom';
import UserPageTemplate from './UserPageTemplate';
// import { PropTypes } from 'prop-types';
// import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
const DetailsTemplate = ({ children,pageType }) => (
  <UserPageTemplate pageType={pageType}>
 {children}
    <Link to="/"> go back</Link>
  </UserPageTemplate>
);

export default DetailsTemplate;
