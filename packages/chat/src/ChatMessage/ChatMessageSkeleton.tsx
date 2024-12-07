import { forwardRef, type ForwardRefExoticComponent, type Key, type RefAttributes, type CSSProperties } from 'react';
import ChatMessage from './ChatMessage';
import { ChatMessageAvatarSkeleton } from './ChatMessageAvatar';
import ChatMessageContentSkeleton from './ChatMessageContentSkeleton';

export interface IChatMessageSkeletonProps {
  isMine: boolean;
  messsageId: Key;
  style?: CSSProperties;
}

const ChatMessageSkeleton: ForwardRefExoticComponent<IChatMessageSkeletonProps & RefAttributes<HTMLDivElement>> =
  forwardRef<HTMLDivElement, IChatMessageSkeletonProps>(({ isMine, messsageId, style }, ref) => (
    <ChatMessage
      direction={isMine ? 'rtl' : 'ltr'}
      key={messsageId}
      ref={ref}
      style={style}
    >
      <ChatMessageAvatarSkeleton />
      <ChatMessageContentSkeleton />
    </ChatMessage>
  ));

export default ChatMessageSkeleton;
