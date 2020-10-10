import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const StyledWrapper = styled.div`
/* display:flex;
flex-direction:row;
justify-content:center;
flex-wrap:nowrap; */
`
const UserPageTemplate = ({ children}) => (
  <StyledWrapper>
    <Sidebar/>
    {children}
  </StyledWrapper>
);

export default UserPageTemplate;

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,

};

