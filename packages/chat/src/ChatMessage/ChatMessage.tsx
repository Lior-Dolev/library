import type { FC, ReactNode } from "react";
import { css } from "@emotion/react";

export interface IChatMessageProps {
  children: ReactNode;
  direction: 'ltr' | 'rtl'
}

const chatMessageGridCss = css({
  height: '100%',
  display: 'grid',
  gridTemplateAreas: `
      "avatar content"
      "none metadata"
      `,
  gridTemplateColumns: `auto 1fr`,
  gridTemplateRows: `1fr auto`,
  columnGap: '0.5rem'
})

const ChatMessage: FC<IChatMessageProps> = ({ children, direction }) => {
  return (<div style={{
    direction,
  }} css={chatMessageGridCss} >
    {children}
  </div>)
}

export default ChatMessage;