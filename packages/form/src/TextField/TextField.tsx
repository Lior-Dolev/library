import { TextField as MUITextField, type TextFieldProps as MUITextFieldProps } from '@mui/material';
import { type KeyboardEventHandler, useImperativeHandle, useRef, CSSProperties } from 'react';
import { useFormContext, useWatch, type FieldPath, type FieldValues } from 'react-hook-form';
import Tooltip from '@horus-library/tooltip';
import Typography from '@horus-library/typography';
import type { BaseFieldProps } from '../Field.types';

export interface TextFieldProps<TFieldValues extends FieldValues, TFieldName extends FieldPath<TFieldValues>>
  extends BaseFieldProps<TFieldValues, TFieldName> {
  inputStyle?: CSSProperties;
  maxRows?: MUITextFieldProps['maxRows'];
  minRows?: MUITextFieldProps['minRows'];
  placeholder?: MUITextFieldProps['placeholder'];
  tooltipStyle?: CSSProperties;
  type?: 'text' | 'number';
}

const TextField = <
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  inputStyle,
  name,
  readOnly,
  required,
  min,
  max,
  minLength,
  maxLength,
  validate,
  tooltipStyle,
  type,
  ...rest
}: TextFieldProps<TFieldValues, TFieldName>) => {
  const { control, formState, register } = useFormContext<TFieldValues, unknown, TFieldValues>();
  const ref = useRef<HTMLInputElement>(null);
  const disabled = readOnly;
  const value = useWatch({ control, name }) ?? '';
  const { ref: formRef, ...registerRest } = register(name, {
    required,
    min,
    max,
    minLength,
    maxLength,
    validate,
    valueAsNumber: type === 'number',
  });
  const errorMessage: string | null =
    typeof formState.errors[name]?.message === 'string' ? (formState.errors[name]?.message as string) : null;

  useImperativeHandle(formRef, () => ref.current);

  const onKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    const { key } = event || {};

    if (!key || key !== 'Escape') {
      return;
    }

    ref?.current?.blur();
  };

  return (
    <Tooltip
      title={<Typography style={tooltipStyle}>{value}</Typography>}
      placement={'bottom-start'}
    >
      <MUITextField
        autoComplete={'off'}
        disabled={disabled}
        error={!!formState.errors[name]}
        helperText={errorMessage ?? <></>}
        fullWidth
        value={value}
        type={type}
        variant={'standard'}
        onKeyDown={onKeyDown}
        inputRef={ref}
        multiline
        inputProps={inputStyle ? { style: inputStyle } : undefined}
        {...registerRest}
        {...rest}
      />
    </Tooltip>
  );
};

export default TextField;
