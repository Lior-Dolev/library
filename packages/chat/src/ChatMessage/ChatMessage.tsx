import { FC, ReactNode } from "react";

export interface IChatMessageProps {
  children: ReactNode;
  direction: 'ltr' | 'rtl'
}

const ChatMessage: FC<IChatMessageProps> = ({ children, direction }) => <div style={{ direction }} >{children}</div>

export default ChatMessage;