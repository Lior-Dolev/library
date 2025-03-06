import type { FC } from 'react';
import type { IChatMessageAvatarProps } from './ChatMessageAvatar';
import ChatMessageAvatar from './ChatMessageAvatar';
import { useTheme } from '@mui/material';

export enum AvatarUnitType {
  hativa = 'hativa',
  ugda = 'ugda',
  iaf = 'iaf',
}

const chatMessageAvatarColorByType: {
  [type in AvatarUnitType]: string;
} = {
  hativa: '#15784c',
  ugda: '#e5b46e',
  iaf: '#0c7792',
};

export interface IChatMessageAvatarByTypeProps extends IChatMessageAvatarProps {
  type?: AvatarUnitType;
}

const ChatMessageAvatarByType: FC<IChatMessageAvatarByTypeProps> = ({
  type,
  style,
  ...rest
}: IChatMessageAvatarByTypeProps) => {
  const bgColor: string | undefined = type ? chatMessageAvatarColorByType[type] : undefined;
  const { palette } = useTheme();
  const color: string | undefined = bgColor ? palette.getContrastText(bgColor) : undefined;

  return (
    <ChatMessageAvatar
      style={{
        backgroundColor: bgColor,
        color,
        ...(style || {}),
      }}
      {...rest}
    />
  );
};

export default ChatMessageAvatarByType;
