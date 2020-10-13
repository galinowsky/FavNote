import React from 'react';
import styled from 'styled-components';
import logoImg from 'assets/icons/logo.svg';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Heading from 'components/atoms/Heading/Heading';
import PropTypes from 'prop-types';

const StyledBackground = styled.div`
  background-color: ${({ theme }) => theme.notes};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StyledLoginPanel = styled.div`
  width: 300px;
  height: 300px;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);
`;
const LogoTitle = styled(ButtonIcon)`
  /* background-image: url({logoImg}); */
  width: 300px;
  height: 200px;
`;

const AuthorizationTemplate = ({ children }) => (
  <StyledBackground>
    <LogoTitle icon={logoImg} />
    <Heading>Your new favorite notes experience</Heading>
    <StyledLoginPanel>{children}</StyledLoginPanel>
  </StyledBackground>
);

export default AuthorizationTemplate;

AuthorizationTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
