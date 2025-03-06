import { forwardRef, type ForwardRefExoticComponent, type ReactNode, type RefAttributes } from 'react';
import ChatFooterForm, { type IChatFooterFormRef } from './ChatFooterForm';
import { css } from '@emotion/react';
import { ChatComponentName } from '../componentNames';

export interface IChatFooterProps {
  /* actions like "approve" */
  children?: ReactNode;
  /* to show spinner in "send" button and disable sending messages */
  isLoading?: boolean;
  onSubmit: (text: string) => void | Promise<void>;
  /* to display on "send" hover */
  submitTooltipContent?: ReactNode;
  textBoxMaxRows?: number;
  textBoxPlaceholder?: string;
}

export interface IChatFooterPropsWithRef extends IChatFooterProps, RefAttributes<IChatFooterFormRef> {}

const ChatFooterCSS = css({
  direction: 'rtl',
});

const actionsGap = '0.3em';
const ChatActionsCSS = css({
  display: 'flex',
  flexWrap: 'wrap',
  gap: actionsGap,
  marginBottom: actionsGap,
});

const ChatFooter: ForwardRefExoticComponent<IChatFooterPropsWithRef> = forwardRef<IChatFooterFormRef, IChatFooterProps>(
  (
    {
      children,
      isLoading,
      onSubmit,
      submitTooltipContent = `שליחה`,
      textBoxMaxRows = 5,
      textBoxPlaceholder = `כתיבת הודעה`,
    },
    ref,
  ) => (
    <div css={ChatFooterCSS}>
      {!!children && <div css={ChatActionsCSS}>{children}</div>}
      <ChatFooterForm
        isLoading={isLoading}
        onSubmit={onSubmit}
        ref={ref}
        submitTooltipContent={submitTooltipContent}
        textBoxMaxRows={textBoxMaxRows}
        textBoxPlaceholder={textBoxPlaceholder}
      />
    </div>
  ),
);

ChatFooter.displayName = ChatComponentName.footer;

export default ChatFooter;
