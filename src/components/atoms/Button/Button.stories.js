import React from 'react';

import Button from 'components/atoms/Button/Button';
import { withKnobs, select } from '@storybook/addon-knobs';

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

const Template = args => {
  const label = 'Colors';
  const options = ['primary', ' secondary', 'tertiary'];

  const defaultValue = 'primary';
  const secondary = false;
  const groupId = 'GROUP-ID1';
  const value = select(label, options, defaultValue, secondary, groupId);

  return (
    <Button value={value} {...args}>
      Button
    </Button>
  );
};

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
};
