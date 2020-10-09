import React from 'react';
import StoryRouter from 'storybook-react-router';
import NewItemBar from './NewItemBar';

export default {
  title: 'Organisms/NewItemBar',
  decorators: [StoryRouter()],
};

export const normalNewItemBar = () => <NewItemBar />;
