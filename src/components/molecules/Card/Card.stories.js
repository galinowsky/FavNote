import React from 'react';
import Card from './Card';

export default {
  title: 'Molecules/Card',
};

export const primar = () => <Card />;
export const second = () => <Card cardType="twitters" />;
export const third = () => <Card cardType="articles" />;
