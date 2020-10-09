// ButtonIcon component

import styled from 'styled-components';

const ButtonIcon = styled.button`
  width: 57px;
  height: 57px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50% 50%;
  border: none;
  border-radius: 15px;
  background-color: ${({ theme, color }) => (color ? theme[color] : 'transparent')};

  /* background-color:transparent; */
  &.active {
    background-color: white;
  }
`;

export default ButtonIcon;
