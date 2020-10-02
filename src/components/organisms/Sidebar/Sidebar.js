import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
// import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import logo from 'assets/icons/logo.svg';

const SidebarWrapper = styled.div`
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
  position: absolute;
  left: 0;
  height: 100vh;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0 25px;
`;
const SidebarMode = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Sidebar = ({ SiderbarType }) => (
  <SidebarWrapper activeColor={SiderbarType}>
    <ButtonIcon icon={logo} />
    <SidebarMode>
      <ButtonIcon as={Link} to="/" icon={penIcon} />
      <ButtonIcon as={Link} to="/twitters" icon={twitterIcon} />
      <ButtonIcon as={Link} to="/articles" icon={bulbIcon} />
    </SidebarMode>

    <ButtonIcon icon={logoutIcon} />
  </SidebarWrapper>
);

export default Sidebar;

Sidebar.propTypes = {
  SiderbarType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

Sidebar.defaultProps = {
  SiderbarType: 'note',
};
