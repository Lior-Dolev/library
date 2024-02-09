import { createTheme } from '@mui/material/styles';
import { stepperThemeComponents } from './stepperTheme';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  direction: 'rtl',
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          textAlign: 'right',
        },
      },
    },
    ...stepperThemeComponents,
  },
});

export default lightTheme;
