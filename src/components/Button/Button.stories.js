import React from 'react';

import Button from 'components/Button/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    secondary: { control: 'color' },
  },
};

const Template = args => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  label: 'Button',
};
