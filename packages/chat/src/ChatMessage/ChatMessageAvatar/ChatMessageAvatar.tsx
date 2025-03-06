import { type AvatarProps } from '@mui/material';
import type { FC, ReactNode } from 'react';
import Tooltip from '@horus-library/tooltip';
import { ChatComponentName } from '../../componentNames';
import Typography from '@horus-library/typography';
import BaseChatMessageAvatar from './BaseChatMessageAvatar';

export interface IChatMessageAvatarProps extends AvatarProps {
  tooltipContent: ReactNode;
}

const ChatMessageAvatar: FC<IChatMessageAvatarProps> = ({ tooltipContent, children, ...rest }) => (
  <Tooltip title={tooltipContent}>
    <BaseChatMessageAvatar {...rest}>
      {typeof children === 'string' ? <Typography>{children}</Typography> : children}
    </BaseChatMessageAvatar>
  </Tooltip>
);

ChatMessageAvatar.displayName = ChatComponentName.messageAvatar;

export default ChatMessageAvatar;
