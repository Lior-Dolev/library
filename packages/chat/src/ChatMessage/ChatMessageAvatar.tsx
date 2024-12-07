import { Avatar, type AvatarProps } from '@mui/material';
import type { FC, ReactNode } from 'react';
import Tooltip from '@horus-library/tooltip'

export interface IChatMessageAvatarProps extends AvatarProps {
  tooltipContent: ReactNode;
}

const ChatMessageAvatar: FC<IChatMessageAvatarProps> = ({ tooltipContent, ...rest }) => {
  return <Tooltip title={tooltipContent} ><Avatar {...rest} /></Tooltip>
}

export default ChatMessageAvatar