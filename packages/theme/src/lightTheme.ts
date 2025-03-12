import { createTheme } from '@mui/material/styles';
import { stepperThemeComponents } from './stepperTheme';
import { typographyTheme } from './typographyTheme';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  direction: 'rtl',
  typography: typographyTheme,
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
