import { Avatar, type AvatarProps } from '@mui/material';
import type { FC, ReactNode } from 'react';
import Tooltip from '@horus-library/tooltip'
import { ChatComponentName } from '../componentNames';

export interface IChatMessageAvatarProps extends AvatarProps {
  tooltipContent: ReactNode;
}

const ChatMessageAvatar: FC<IChatMessageAvatarProps> = ({ tooltipContent, style, ...rest }) => {
  return <Tooltip title={tooltipContent} ><Avatar style={{ gridArea: 'avatar', marginTop: '0.625rem', height: '30px', width: '30px', ...(style || {}) }} {...rest} /></Tooltip>
}

ChatMessageAvatar.displayName = ChatComponentName.messageAvatar

export default ChatMessageAvatar