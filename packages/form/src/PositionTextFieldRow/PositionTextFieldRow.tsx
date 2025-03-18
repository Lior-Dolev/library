import type { FieldPath, FieldValues } from 'react-hook-form';
import { TextFieldRow, type TextFieldRowProps } from '../TextField';

export type PositionTextFieldRowProps<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<TextFieldRowProps<TFieldValues, TFieldName>, 'inputStyle'>;

const PositionTextFieldRow = <
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: PositionTextFieldRowProps<TFieldValues, TFieldName>,
) => (
  <TextFieldRow
    {...props}
    tooltipStyle={{ direction: 'ltr', textAlign: 'end' }}
    inputStyle={{ direction: 'ltr', textAlign: 'end' }}
  />
);

export default PositionTextFieldRow;
