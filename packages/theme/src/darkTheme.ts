import { createTheme } from '@mui/material/styles';
import type { PaletteOptions } from '@mui/material/styles';
import { stepperThemeComponents } from './stepperTheme';
import { dialogThemeComponents } from './dialogTheme';
import { darkScrollbar } from '@mui/material';
import { typographyTheme } from './typographyTheme';

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
};

const codeTheme = createTheme({
  direction: 'rtl',
  palette: codePalette,
  typography: typographyTheme,
  components: {
    MuiCssBaseline: {
      styleOverrides: ({ palette: { mode } }) => ({
        body: mode === 'dark' ? darkScrollbar() : null,
        '::-webkit-scrollbar': { width: 'auto', backgroundColor: 'inherit' },
      }),
    },
    ...dialogThemeComponents,
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          direction: 'rtl',
        },
        inputRoot: {
          direction: 'rtl',
          paddingRight: '0px !important',
          paddingLeft: '20px',
        },
        input: {
          paddingRight: '0px !important',
        },
        endAdornment: {
          right: 'unset',
          left: 0,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          direction: 'rtl',
        },
        icon: {
          left: '0px',
          right: 'unset',
        },
        select: {
          paddingRight: '0px !important',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          direction: 'rtl',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          direction: 'rtl',
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          direction: 'rtl',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          direction: 'rtl',
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          direction: 'rtl',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          textAlign: 'right',
          direction: 'rtl',
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        input: {
          '::placeholder': {
            fontStyle: 'italic',
          },
          '::-webkit-input-placeholder': {
            fontStyle: 'italic',
          },
          ':-moz-placeholder': {
            fontStyle: 'italic',
          },
          '::-moz-placeholder': {
            fontStyle: 'italic',
          },
          ':-ms-input-placeholder': {
            fontStyle: 'italic',
          },
          '::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
          },
          '::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
          },
          '[type=number]': {
            '-moz-appearance': 'textfield',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          direction: 'rtl',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          textAlign: 'right',
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          direction: 'rtl',
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          direction: 'rtl',
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          direction: 'rtl',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          direction: 'rtl',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          direction: 'rtl',
          textAlign: 'center',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          direction: 'rtl',
        },
      },
    },
    ...stepperThemeComponents,
  },
});

export default codeTheme;
