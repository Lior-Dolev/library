import { Grid, useTheme } from '@mui/material';
import type { FC, ReactNode } from 'react';
import Required from './Required';

export interface FormRowProps {
  children: ReactNode;
  htmlFor?: string;
  label: string;
  readOnly?: boolean;
  required?: boolean;
}

const FormRow: FC<FormRowProps> = ({ children, htmlFor, label, readOnly, required }: FormRowProps) => {
  const {
    palette: {
      text: { disabled: disabledTextColor },
    },
  } = useTheme();

  return (
    <Grid
      container
      spacing={0.5}
    >
      <Grid
        item
        xs={5}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <label
          htmlFor={htmlFor}
          style={{ color: readOnly ? disabledTextColor : undefined }}
        >
          {label}
          {required && <Required />}
        </label>
      </Grid>
      <Grid
        item
        xs={7}
        style={{ direction: 'rtl' }}
      >
        {children}
      </Grid>
    </Grid>
  );
};

export default FormRow;
