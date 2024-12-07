import {
  forwardRef,
  type ForwardRefExoticComponent,
  type ReactEventHandler,
  type RefAttributes,
  type CSSProperties,
  type ReactNode,
} from 'react';
import { css } from '@emotion/react';

export interface IChatMessageProps {
  children: ReactNode;
  direction: 'ltr' | 'rtl';
  onLoad?: ReactEventHandler<HTMLDivElement>;
  style?: CSSProperties;
}

const chatMessageGridCss = css({
  display: 'grid',
  gridTemplateAreas: `
      "avatar content"
      "none metadata"
      `,
  gridTemplateColumns: `auto 1fr`,
  gridTemplateRows: `1fr auto`,
  columnGap: '0.5rem',
  rowGap: '0.25rem',
});

const ChatMessage: ForwardRefExoticComponent<IChatMessageProps & RefAttributes<HTMLDivElement>> = forwardRef<
  HTMLDivElement,
  IChatMessageProps
>(({ children, direction, style }, ref) => (
  <div
    style={{
      ...(style || {}),
      direction,
    }}
    css={chatMessageGridCss}
    ref={ref}
  >
    {children}
  </div>
));

export default ChatMessage;
