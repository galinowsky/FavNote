// ButtonIcon component

import styled from 'styled-components';

const ButtonIcon = styled.button`
  width: 67px;
  height: 67px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 40%;
  border: none;
  border-radius: 15px;
  background-color: ${({ active }) => (active ? 'white' : 'transparent')};
`;

export default ButtonIcon;
