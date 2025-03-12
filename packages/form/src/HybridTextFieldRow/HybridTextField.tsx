import { TextField } from '@mui/material';
import { type ChangeEvent, type FC, type KeyboardEventHandler, useCallback, useRef } from 'react';

interface IHybridTextFieldProps {
  error?: boolean | string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  readOnly: boolean;
  value: string | undefined;
}

const HybridTextField: FC<IHybridTextFieldProps> = ({ error, name, onChange, readOnly, value }) => {
  const ref = useRef<HTMLInputElement>(null);
  const errorMessage = typeof error === 'string' ? error : undefined;

  const onKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    const { key } = event || {};

    if (!key || key !== 'Espace') {
      return;
    }

    ref?.current?.blur();
  };

  const _onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (readOnly) {
        return;
      }

      onChange(event);
    },
    [onChange, readOnly],
  );

  return (
    <TextField
      autoComplete={'off'}
      disabled={readOnly}
      error={!!error}
      fullWidth
      helperText={errorMessage ?? <></>}
      inputRef={ref}
      multiline
      name={name}
      onChange={(e) => _onChange(e)}
      onKeyDown={onKeyDown}
      type={'text'}
      value={value}
      variant={'standard'}
    />
  );
};

export default HybridTextField;
