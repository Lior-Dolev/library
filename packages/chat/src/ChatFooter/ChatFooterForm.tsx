import {
  forwardRef,
  type ForwardRefExoticComponent,
  type ReactNode,
  type RefAttributes,
  useImperativeHandle,
  useState,
} from 'react';
import { TextField } from '@mui/material';
import SubmitMessageButton from './SubmitMessageButton';
import { css } from '@emotion/react';

export interface IChatFooterFormProps {
  /* to show spinner in "send" button and disable sending messages */
  isLoading?: boolean;
  onSubmit: (text: string) => void;
  /* to display on "send" hover */
  submitTooltipContent?: ReactNode;
  textBoxMaxRows?: number;
  textBoxPlaceholder?: string;
}

export interface IChatFooterFormRef {
  clearTextbox: () => void;
}

export interface IChatFooterFormPropsWithRef extends IChatFooterFormProps, RefAttributes<IChatFooterFormRef> {}

const ChatFooterFormCSS = css({
  display: 'flex',
});

/**
 * @todo - future - add "max characters" and add characters counter (by trimmed value)
 *                - when user has reached the limit then counter is red
 */
const ChatFooterForm: ForwardRefExoticComponent<IChatFooterFormPropsWithRef> = forwardRef<
  IChatFooterFormRef,
  IChatFooterFormProps
>(({ isLoading, onSubmit, submitTooltipContent, textBoxMaxRows, textBoxPlaceholder }, ref) => {
  const [value, setValue] = useState<string>('');

  const _onSubmit = () => {
    if (isLoading || !value) {
      return;
    }

    const trimmedText = value.trim();

    if (!trimmedText.length) {
      return;
    }

    onSubmit(trimmedText);
  };

  // Use useImperativeHandle to expose the `clearTextbox` method
  useImperativeHandle(
    ref,
    () => ({
      clearTextbox: () => {
        setValue('');
      },
    }),
    [setValue],
  );

  const onTextChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    setValue(event.target.value);
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === 'Enter') {
      if (!event.shiftKey) {
        // Submit the form
        event.preventDefault();
        _onSubmit();
      }
    }
  };

  return (
    <form css={ChatFooterFormCSS}>
      <TextField
        fullWidth
        maxRows={textBoxMaxRows}
        multiline
        onChange={onTextChange}
        onKeyDown={onKeyDown}
        placeholder={textBoxPlaceholder}
        size="small"
        value={value}
        variant="outlined"
      />
      <SubmitMessageButton
        isLoading={isLoading}
        onClick={_onSubmit}
        tooltipContent={submitTooltipContent}
      />
    </form>
  );
});

export default ChatFooterForm;
