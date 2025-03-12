import type { FieldPath, FieldValues } from 'react-hook-form';
import FormRow from '../FormRow';
import CheckboxField, { type CheckboxFieldProps } from './CheckboxField';

export interface CheckboxFieldRowProps<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends CheckboxFieldProps<TFieldValues, TFieldName> {
  asteriskWithoutRequiredValidation?: boolean;
  label: string;
  readOnly?: boolean;
}

const CheckboxFieldRow = <
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  asteriskWithoutRequiredValidation,
  id,
  label,
  readOnly,
  required,
  ...rest
}: CheckboxFieldRowProps<TFieldValues, TFieldName>) => (
  <FormRow
    label={label}
    readOnly={readOnly}
    required={!!required || asteriskWithoutRequiredValidation}
    htmlFor={id}
  >
    <CheckboxField
      readOnly={readOnly}
      required={required}
      id={id}
      {...rest}
    />
  </FormRow>
);

export default CheckboxFieldRow;
