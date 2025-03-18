import { Checkbox } from '@mui/material';
import { type FieldPath, type FieldValues, useFormContext, useWatch } from 'react-hook-form';
import type { BaseFieldProps } from '../Field.types';

export interface CheckboxFieldProps<TFieldValues extends FieldValues, TFieldName extends FieldPath<TFieldValues>>
  extends BaseFieldProps<TFieldValues, TFieldName> {}

const CheckboxField = <
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  required,
  validate,
  readOnly,
  ...rest
}: CheckboxFieldProps<TFieldValues, TFieldName>) => {
  const { control, register } = useFormContext<TFieldValues, unknown, TFieldValues>();
  const value = useWatch({ control, name });
  const disabled = readOnly;
  const { ...registerRest } = register(name, { required, validate });

  return (
    <Checkbox
      color="default"
      disabled={disabled}
      {...registerRest}
      {...rest}
      checked={!!value}
    />
  );
};

export default CheckboxField;
