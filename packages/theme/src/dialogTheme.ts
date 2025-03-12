import type { ThemeOptions } from '@mui/material';

export const dialogThemeComponents: ThemeOptions['components'] = {
  MuiDialog: {
    styleOverrides: {
      root: {
        direction: 'rtl',
        textAlign: 'right',
      },
    },
  },
};
