import React from 'react';

import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
// import { withKnobs, boolean } from '@storybook/addon-knobs';
import styled from 'styled-components';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import { boolean } from '@storybook/addon-knobs';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background-color: ${({ theme }) => theme.note};
`;

export default {
  title: 'Atoms/ButtonIcon',
  component: ButtonIcon,
  decorators: [
    Story => (
      <YellowBackground>
        <Story active={boolean('active?', false)} />
      </YellowBackground>
    ),
  ],
};

export const bulb = () => <ButtonIcon icon={bulbIcon} />;
export const logout = () => <ButtonIcon icon={logoutIcon} />;
export const pen = () => <ButtonIcon icon={penIcon} />;
export const plus = () => <ButtonIcon icon={plusIcon} />;
export const twitter = () => <ButtonIcon icon={twitterIcon} />;
