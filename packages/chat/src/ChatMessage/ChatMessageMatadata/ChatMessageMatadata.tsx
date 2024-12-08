import type { FC, ReactNode } from "react";

export interface IChatMessageMatadataProps {
  children: ReactNode;
}

const ChatMessageMatadata: FC<IChatMessageMatadataProps> = ({ children }) => {
  return (<div style={{ gridArea: 'metadata', display: 'flex', alignItems: 'center', gap: '0.5em' }} >{children}</div>)
}

ChatMessageMatadata.displayName = 'ChatMessageMatadata';

export default ChatMessageMatadata;