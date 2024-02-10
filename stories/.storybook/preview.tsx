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
    options: {
      /**
       * Folders order: Intro, Components
       * In folders order: Docs, stories alphabetic, other docs alphabetic
       */
      storySort: (a, b) => {
        const storyFoldersOrder = ['Intro', 'Components'];
        if (a.id === b.id) {
          return 0;
        }

        const getFoldersByTitle = (value) => {
          if (!value || typeof value !== 'string' || !value.includes('/')) {
            return [''];
          }

          return value.split('/');
        };

        const [rootFolderA, subFolderA] = getFoldersByTitle(a.title);
        const [rootFolderB, subFolderB] = getFoldersByTitle(b.title);

        if (!rootFolderA && rootFolderB) {
          return 1;
        }

        if (!rootFolderB && rootFolderA) {
          return -1;
        }

        if (rootFolderA !== rootFolderB) {
          const folderAIndex = storyFoldersOrder.indexOf(rootFolderA);
          const folderBIndex = storyFoldersOrder.indexOf(rootFolderB);

          if (folderAIndex - folderBIndex > 0) {
            return 1;
          }

          if (folderBIndex - folderAIndex > 0) {
            return -1;
          }

          return rootFolderA.localeCompare(rootFolderB, undefined, {
            numeric: true,
          });
        }

        if (subFolderA !== subFolderB) {
          return subFolderA.localeCompare(subFolderB, undefined, {
            numeric: true,
          });
        }

        const isDocs = (value) => {
          return value.type === 'docs';
        };
        const isStory = (value) => {
          return value.type === 'story';
        };
        const isRootDocs = (value) => {
          return isDocs(value) && value.name === 'Docs';
        };

        if (isRootDocs(a)) {
          return -1;
        }

        if (isRootDocs(b)) {
          return 1;
        }

        if ((isStory(a) && isStory(b)) || (isDocs(a) && isDocs(b))) {
          return a.name.localeCompare(b.name, undefined, { numeric: true });
        }

        if (isStory(a)) {
          return -1;
        }

        return 1;
      },
    },
  },
  decorators: [withMUITheme],
};

export default preview;
