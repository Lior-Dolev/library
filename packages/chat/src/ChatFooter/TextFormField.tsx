import { Control, Controller, FieldValues } from 'react-hook-form';
import TextField from '@mui/material/TextField';

interface ITextFormFieldProps {
  control?: Control<FieldValues> | undefined;
  name: string;
}

const TextFormField = ({ name, control }: ITextFormFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          variant="outlined"
        />
      )}
    />
  );
};

export default TextFormField;
