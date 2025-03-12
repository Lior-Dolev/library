import type { CSSProperties } from 'react';
import type { FieldPath, FieldPathValue, FieldValues, Message, Validate, ValidationRule } from 'react-hook-form';

export interface RegisterValidationOptions<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues>,
> {
  required: Message | ValidationRule<boolean>;
  min: ValidationRule<number | string>;
  max: ValidationRule<number | string>;
  maxLength: ValidationRule<number>;
  minLength: ValidationRule<number>;
  validate: Validate<FieldPathValue<TFieldValues, TFieldName>, TFieldValues>;
}

export interface BaseFieldProps<TFieldValues extends FieldValues, TFieldName extends FieldPath<TFieldValues>>
  extends Partial<RegisterValidationOptions<TFieldValues, TFieldName>> {
  id?: string;
  name: TFieldName;
  readOnly?: boolean;
  style?: CSSProperties;
}
