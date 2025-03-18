import { Autocomplete, type AutocompleteChangeReason, TextField } from '@mui/material';
import { useCallback } from 'react';
import { type FieldPath, type FieldValues, useFormContext, Controller } from 'react-hook-form';
import type { BaseFieldProps } from '../Field.types';

export type SelectFieldOption2 = {
  disabled?: boolean;
  id: string;
  label: string;
};
export interface SelectFieldProps2<TFieldValues extends FieldValues, TFieldName extends FieldPath<TFieldValues>>
  extends BaseFieldProps<TFieldValues, TFieldName> {
  options: SelectFieldOption2[];
}

const isOptionEqualToValue = (option: SelectFieldOption2, valueToCompare: SelectFieldOption2): boolean =>
  option?.id === valueToCompare?.id;

const SelectField2 = <TFieldValues extends FieldValues, TFieldName extends FieldPath<TFieldValues>>({
  options,
  name,
  required,
  validate,
  readOnly,
  ...rest
}: SelectFieldProps2<TFieldValues, TFieldName>) => {
  const { control, formState, trigger } = useFormContext<TFieldValues, unknown, TFieldValues>();
  const disabled = readOnly;
  const error = formState.errors[name];

  const _onChange = useCallback(
    (
      changedValue: SelectFieldOption2 | null,
      reason: AutocompleteChangeReason,
      onChange: (...event: unknown[]) => void,
    ) => {
      if (required && reason === 'clear') {
        return;
      }

      onChange(changedValue);

      if (error) {
        trigger(name);
      }
    },
    [error, name, required, trigger],
  );

  return (
    <Controller
      name={name}
      control={control}
      rules={{ validate }}
      render={({ field }) => (
        <Autocomplete
          {...field}
          disablePortal
          disabled={disabled}
          getOptionDisabled={(option) => !!option.disabled}
          renderInput={(params) => (
            <TextField
              {...params}
              error={!!formState.errors[name]}
              variant={'standard'}
              multiline
            />
          )}
          getOptionLabel={(option) => option.label}
          renderOption={(props, option) => (
            <li
              {...props}
              key={option.id}
            >
              {option.label}
            </li>
          )}
          isOptionEqualToValue={isOptionEqualToValue}
          clearText={''}
          disableClearable={!!required}
          fullWidth
          options={options}
          onChange={(_, changedValue, reason) => _onChange(changedValue as SelectFieldOption2, reason, field.onChange)}
          value={field.value ?? null}
          {...rest}
        />
      )}
    />
  );
};

export default SelectField2;
