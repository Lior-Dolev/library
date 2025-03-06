import { type FC } from 'react';
import ChatMessageContent from './ChatMessageContent';
import { Skeleton } from '@mui/material';

const ChatMessageContentSkeleton: FC<{}> = () => (
  <ChatMessageContent style={{ width: 'unset' }}>
    <Skeleton animation={'wave'} />
    <Skeleton
      animation={'wave'}
      width={'40%'}
    />
    <Skeleton
      animation={'wave'}
      width={'80%'}
    />
  </ChatMessageContent>
);

export default ChatMessageContentSkeleton;
