import React from 'react';
import { addDecorator } from '@storybook/react';
import { Router } from 'react-router-dom';
import { withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/mainTheme';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

addDecorator(withKnobs);
addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
// addDecorator(story => <Router>{story()}</Router>);
