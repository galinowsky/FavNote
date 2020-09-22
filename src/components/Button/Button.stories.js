import React from 'react';

import Button from 'components/Button/Button';
import { withKnobs, select } from '@storybook/addon-knobs';

const label = 'Colors';
const options = {
  Primary: 'hsl(49, 100%, 58%)',
  Secondary: 'hsl(196, 83%, 75%)',
  Tertiary: 'hsl(106, 47%, 64%)',
};
const defaultValue = 'hsl(196, 83%, 75%)';
const groupId = 'GROUP-ID1';

const value = select(label, options, defaultValue, groupId);

export default {
  title: 'Example/Button', // podoajemy ścieżke
  component: Button,
  decorators: [withKnobs],
  args: {
    children: 'Button',
  },
  argTypes: {
    children: { control: 'text' },
  },
};

const Template = args => <Button {...args}>{args.children}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  color: value,
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  color: value,
};
