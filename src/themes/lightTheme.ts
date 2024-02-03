import { createTheme } from '@mui/material/styles';
import { stepperThemeComponents } from '../Stepper/stepperTheme';

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
