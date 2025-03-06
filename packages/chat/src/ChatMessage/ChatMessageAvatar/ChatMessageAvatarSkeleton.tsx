import { Skeleton } from '@mui/material';
import type { FC } from 'react';
import BaseChatMessageAvatar from './BaseChatMessageAvatar';

const ChatMessageAvatarSkeleton: FC<{}> = () => (
  <BaseChatMessageAvatar style={{ backgroundColor: 'unset', display: 'block' }}>
    <Skeleton
      animation={'wave'}
      variant={'circular'}
      height={'100%'}
      width={'100%'}
    />
  </BaseChatMessageAvatar>
);

export default ChatMessageAvatarSkeleton;
