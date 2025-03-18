import type { FieldPath, FieldValues } from 'react-hook-form';
import FormRow from '../FormRow';
import TextField, { type TextFieldProps } from './TextField';

export interface TextFieldRowProps<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends TextFieldProps<TFieldValues, TFieldName> {
  asteriskWithoutRequiredValidation?: boolean;
  label: string;
  readOnly?: boolean;
}

const TextFieldRow = <
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  asteriskWithoutRequiredValidation,
  id,
  label,
  readOnly,
  required,
  ...rest
}: TextFieldRowProps<TFieldValues, TFieldName>) => (
  <FormRow
    label={label}
    readOnly={readOnly}
    required={!!required || asteriskWithoutRequiredValidation}
    htmlFor={id}
  >
    <TextField
      readOnly={readOnly}
      required={required}
      id={id}
      {...rest}
    />
  </FormRow>
);

export default TextFieldRow;
