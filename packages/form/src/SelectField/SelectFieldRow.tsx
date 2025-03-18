import type { FieldPath, FieldValues } from 'react-hook-form';
import FormRow from '../FormRow';
import SelectField, { type SelectFieldProps } from './SelectField';

export interface SelectFieldRowProps<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends SelectFieldProps<TFieldValues, TFieldName> {
  asteriskWithoutRequiredValidation?: boolean;
  label: string;
  readOnly?: boolean;
}

const SelectFieldRow = <
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  asteriskWithoutRequiredValidation,
  id,
  label,
  readOnly,
  required,
  ...rest
}: SelectFieldRowProps<TFieldValues, TFieldName>) => (
  <FormRow
    label={label}
    readOnly={readOnly}
    required={!!required || asteriskWithoutRequiredValidation}
    htmlFor={id}
  >
    <SelectField
      readOnly={readOnly}
      required={required}
      id={id}
      {...rest}
    />
  </FormRow>
);

export default SelectFieldRow;
