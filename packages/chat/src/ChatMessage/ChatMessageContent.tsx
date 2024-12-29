import type { FC, ReactNode } from "react";
import Typography from '@horus-library/typography';
import { ChatComponentName } from "../componentNames";

export interface IChatMessageContentProps {
  children: ReactNode;
}

const ChatMessageContent: FC<IChatMessageContentProps> = ({ children }) => <div style={{
  width: 'fit-content',
  border: '1px solid grey',
  borderRadius: '10px',
  padding: '0.625rem 1.25rem',
  maxWidth: '70%',
  gridArea: 'content'
}} >{typeof children === 'string' ? <Typography style={{ whiteSpace: 'pre-wrap' }} >{children}</Typography> : children} </div>

ChatMessageContent.displayName = ChatComponentName.messageContent

export default ChatMessageContent;