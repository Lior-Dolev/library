import { createTheme } from '@mui/material/styles';
import type { PaletteOptions } from '@mui/material/styles';

const githubDarkPalette: PaletteOptions = {
  primary: {
    main: '#0366d6', // GitHub blue
  },
  secondary: {
    main: '#6a737d', // GitHub gray
  },
  background: {
    default: '#0d1117', // GitHub background color
    paper: '#161b22', // GitHub code background color
  },
  text: {
    primary: '#c9d1d9', // GitHub text color
    secondary: '#8b949e', // GitHub secondary text color
  },
};

const githubDarkTheme = createTheme({
  palette: githubDarkPalette,
  direction: 'rtl',
  // You can customize other theme options here, such as typography, spacing, etc.
});

export default githubDarkTheme;
