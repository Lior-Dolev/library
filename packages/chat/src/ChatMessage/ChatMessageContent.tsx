import { CSSProperties, type FC, type ReactNode } from 'react';
import Typography from '@horus-library/typography';
import { ChatComponentName } from '../componentNames';

export interface IChatMessageContentProps {
  children: ReactNode;
  style?: CSSProperties;
}

const ChatMessageContent: FC<IChatMessageContentProps> = ({ children, style }) => (
  <div
    style={{
      width: 'fit-content',
      border: '1px solid grey',
      borderRadius: '10px',
      padding: '0.625rem 1.25rem',
      maxWidth: '70%',
      gridArea: 'content',
      ...(style || {}),
    }}
  >
    {typeof children === 'string' ? <Typography style={{ whiteSpace: 'pre-wrap' }}>{children}</Typography> : children}{' '}
  </div>
);

ChatMessageContent.displayName = ChatComponentName.messageContent;

export default ChatMessageContent;
