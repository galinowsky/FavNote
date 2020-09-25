import React from 'react';
import Heading from './Heading';

export default {
  title: 'Example/Heading',
  component: Heading,
};

export const Normal = () => {
  return <Heading>Hello duppo</Heading>;
};
export const Big = () => {
  return <Heading big>Hello duppo</Heading>;
};
