import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import logo from 'assets/icons/logo.svg';

const SidebarWrapper = styled.div`
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
  position: fixed;
  left: 0;
  height: 100vh;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0 25px;
  z-index: 3000;
`;
const SidebarMode = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Sidebar = ({ pageType }) => (
  <SidebarWrapper activeColor={pageType}>
    <ButtonIcon icon={logo} />
    <SidebarMode>
      <ButtonIcon as={NavLink} to="/notes"  icon={penIcon} activeclass="active" />
      <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} activeclass="active" />

      <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} activeclass="active" />
    </SidebarMode>

    <ButtonIcon as={NavLink} to="/login" icon={logoutIcon} />
  </SidebarWrapper>
);

export default Sidebar;

Sidebar.propTypes = {
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

Sidebar.defaultProps = {
  pageType: 'notes',
};
