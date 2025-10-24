import React from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from '@mui/material/styles';
import { ThemeProvider as StylesThemeProvider } from '@mui/styles';

// Make React available globally for JSX - critical for older components
globalThis.React = React;
if (typeof window !== 'undefined') {
  window.React = React;
}

// Polyfill for Node.js globals in browser
if (typeof globalThis.process === 'undefined') {
  globalThis.process = {
    env: {},
    browser: true,
    version: '',
    versions: {},
    platform: 'browser',
    argv: [],
    cwd: () => '/',
    nextTick: (cb) => Promise.resolve().then(cb),
  };
}

// Create theme for MUI components
const theme = createTheme({
  typography: {
    htmlFontSize: 14,
  },
});

// Add theme providers as decorators
export const decorators = [
  (Story) => (
    <MuiThemeProvider theme={theme}>
      <StylesThemeProvider theme={theme}>
        <Story />
      </StylesThemeProvider>
    </MuiThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
