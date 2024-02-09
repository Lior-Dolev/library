import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import type { Preview, Decorator } from '@storybook/react';
import { darkTheme, lightTheme } from '@horus-library/theme';
import React, { useMemo } from 'react';

enum ThemeType {
  dark = 'dark',
  light = 'light',
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    title: 'Theme',
    description: 'Theme for your components',
    defaultValue: ThemeType.dark,
    toolbar: {
      icon: 'paintbrush',
      dynamicTitle: true,
      items: [
        { value: ThemeType.dark, title: 'Dark mode' },
        { value: ThemeType.light, title: 'Light mode' },
      ],
    },
  },
};

const ThemeByType: { [key in ThemeType]: Theme } = {
  dark: darkTheme,
  light: lightTheme,
};

const withMUITheme: Decorator = (Story, context) => {
  const {
    globals: { theme: themeContext },
  } = context;
  const theme = useMemo(
    () => ThemeByType[themeContext] || ThemeByType.dark,
    [themeContext]
  );

  console.log('context', context);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default: ThemeType.dark,
      values: [
        {
          name: ThemeType.dark,
          value: darkTheme.palette.background.default,
        },
        {
          name: ThemeType.light,
          value: lightTheme.palette.background.default,
        },
      ],
    },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [withMUITheme],
};

export default preview;
