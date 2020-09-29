import React from 'react';
import Card from './Card';

export default {
  title: 'Example/Card',
};

export const primar = () => <Card />;
export const second = () => <Card cardType="twitter" />;
export const third = () => <Card cardType="article" />;
