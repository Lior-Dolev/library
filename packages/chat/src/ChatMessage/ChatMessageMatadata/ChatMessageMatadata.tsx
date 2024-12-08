import type { FC, ReactNode } from "react";

export interface IChatMessageMatadataProps {
  children: ReactNode;
}

const ChatMessageMatadata: FC<IChatMessageMatadataProps> = ({ children }) => {
  return (<div style={{ gridArea: 'metadata' }} >{children}</div>)
}

ChatMessageMatadata.displayName = 'ChatMessageMatadata';

export default ChatMessageMatadata;