import { Autocomplete, type AutocompleteChangeReason, TextField } from '@mui/material';
import { type SyntheticEvent, useCallback, useMemo } from 'react';
import { type FieldPath, type FieldValues, PathValue, useFormContext, useWatch } from 'react-hook-form';
import type { BaseFieldProps } from '../Field.types';

export type SelectFieldOption = {
  id: string;
  label: string;
};
export interface SelectFieldProps<TFieldValues extends FieldValues, TFieldName extends FieldPath<TFieldValues>>
  extends BaseFieldProps<TFieldValues, TFieldName> {
  options: SelectFieldOption[];
  placeholder?: string;
}

const isOptionEqualToValue = (option: SelectFieldOption, valueToCompare: SelectFieldOption): boolean =>
  option?.id === valueToCompare?.id;

const SelectField = <TFieldValues extends FieldValues, TFieldName extends FieldPath<TFieldValues>>({
  options: optionsProps,
  name,
  required,
  min,
  max,
  minLength,
  maxLength,
  placeholder,
  validate,
  readOnly,
  ...rest
}: SelectFieldProps<TFieldValues, TFieldName>) => {
  const { control, formState, register, setValue, trigger } = useFormContext<TFieldValues, unknown, TFieldValues>();
  const valueId = useWatch({ control, name });
  const options = useMemo(
    () => (optionsProps?.length ? optionsProps : valueId ? [{ id: valueId, label: valueId }] : []),
    [optionsProps, valueId],
  );

  const value = useMemo<SelectFieldOption | undefined>(
    () => options.find(({ id }) => id === valueId),
    [valueId, options],
  );

  const disabled = readOnly;
  const error = formState.errors[name];
  const { onChange, ...registerRest } = register(name, {
    required,
    min,
    max,
    minLength,
    maxLength,
    validate,
  });

  const _onChange = useCallback(
    (
      event: SyntheticEvent<Element, Event>,
      changedValue: SelectFieldOption | null,
      reason: AutocompleteChangeReason,
    ) => {
      if (required && reason === 'clear') {
        return;
      }

      onChange(event);
      setValue(name, changedValue?.id as PathValue<TFieldValues, TFieldName>);

      if (error) {
        trigger(name);
      }
    },
    [error, onChange, name, required, setValue, trigger],
  );

  return (
    <Autocomplete
      disablePortal
      disabled={disabled}
      renderInput={(params) => (
        <TextField
          {...params}
          error={!!formState.errors[name]}
          variant={'standard'}
          multiline
          placeholder={placeholder}
        />
      )}
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
      value={value ?? null}
      options={options}
      onChange={_onChange}
      {...registerRest}
      {...rest}
    />
  );
};

export default SelectField;
