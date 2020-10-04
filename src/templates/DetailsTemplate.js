import React from 'react';
import { Link } from 'react-router-dom';
import UserPageTemplate from './UserPageTemplate';
// import { PropTypes } from 'prop-types';
// import styled from 'styled-components';

const DetailsTemplate = () => (
  <UserPageTemplate>
    <h1>Note</h1>
    <p>
      Quis sit Lorem irure pariatur sint aliquip commodo voluptate consequat reprehenderit occaecat.
      Reprehenderit deserunt aliqua magna amet ipsum exercitation. Qui tempor cupidatat anim quis
      irure fugiat velit mollit excepteur ullamco aliquip incididunt. Ad ut proident qui dolore esse
      minim. Consectetur irure eiusmod in eiusmod do consectetur voluptate commodo pariatur. Eiusmod
      sunt ullamco sint velit magna ad laboris aliquip occaecat. Proident sunt ut commodo enim elit
      dolore. Nisi sit adipisicing adipisicing ex. Tempor nostrud sint anim labore ipsum ea aute qui
      ad id ut anim deserunt.
    </p>
    <Link to="/"> go back</Link>
  </UserPageTemplate>
);

export default DetailsTemplate;
