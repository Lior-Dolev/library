import type { FieldPath, FieldValues } from 'react-hook-form';
import FormRow from '../FormRow';
import SelectField2, { type SelectFieldProps2 } from './SelectField2';

export interface SelectFieldRowProps2<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends SelectFieldProps2<TFieldValues, TFieldName> {
  asteriskWithoutRequiredValidation?: boolean;
  label: string;
  readOnly?: boolean;
}

const SelectFieldRow2 = <
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  asteriskWithoutRequiredValidation,
  id,
  label,
  readOnly,
  required,
  ...rest
}: SelectFieldRowProps2<TFieldValues, TFieldName>) => (
  <FormRow
    label={label}
    readOnly={readOnly}
    required={!!required || asteriskWithoutRequiredValidation}
    htmlFor={id}
  >
    <SelectField2
      readOnly={readOnly}
      required={required}
      id={id}
      {...rest}
    />
  </FormRow>
);

export default SelectFieldRow2;
