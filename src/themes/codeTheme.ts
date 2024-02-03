import { PaletteOptions, createTheme } from '@mui/material/styles'
import { stepperThemeComponents } from '../Stepper/stepperTheme'

const codePalette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: '#0366d6', // Blue
  },
  secondary: {
    main: '#31323e', // Light gray
  },
  background: {
    default: '#0d1117', // Dark background
    paper: '#161b22', // Code block background
  },
  text: {
    primary: '#c9d1d9', // Light gray text
    secondary: '#8b949e', // Darker gray text
  },
}

const codeTheme = createTheme({
  direction: 'rtl',
  palette: codePalette,
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
})

export default codeTheme
