import React from 'react';
import Input from './Input';

export default {
  title: 'Example/Input',
  component: Input,
};

export const Normal = () => {
  return <Input placeholder="login" />;
};

export const notNormal = () => {
  return <Input placeholder="search" search />;
};
