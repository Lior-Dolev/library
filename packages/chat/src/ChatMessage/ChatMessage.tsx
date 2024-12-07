import type { FC, ReactNode } from "react";
import ChatMessageContent from './ChatMessageContent';

export interface IChatMessageProps {
  children: ReactNode;
  direction: 'ltr' | 'rtl'
}

const ChatMessage: FC<IChatMessageProps> = ({ children, direction }) => {
  return (<div style={{
    direction,
  }} >
    <ChatMessageContent>{children}</ChatMessageContent>
  </div>)
}

export default ChatMessage;