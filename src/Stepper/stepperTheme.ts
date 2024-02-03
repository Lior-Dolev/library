import type { ThemeOptions } from '@mui/material'

export const stepperThemeComponents: ThemeOptions['components'] = {
  MuiStepper: {
    styleOverrides: {
      root: {
        direction: 'rtl',
        textAlign: 'right',
      },
    },
  },
  MuiStepLabel: {
    styleOverrides: {
      root: {
        textAlign: 'right',
        cursor: 'pointer',
      },
      iconContainer: {
        paddingRight: 0,
        paddingLeft: '8px',
      },
    },
  },
  MuiStepConnector: {
    styleOverrides: {
      root: {
        marginLeft: 0,
        marginRight: '12px',
      },
      lineVertical: ({ theme }) => ({
        borderLeft: 'none',
        borderRight: `1px solid ${theme.palette.grey[600]}`,
      }),
    },
  },
  MuiStepContent: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderLeft: 0,
        borderRight: `1px solid ${theme.palette.grey[600]}`,
        marginRight: '12px',
      }),
      last: {
        borderRight: 0,
        marginRight: '14px',
      },
    },
  },
}
