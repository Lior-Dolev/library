import { Avatar, type AvatarProps } from '@mui/material';
import { forwardRef, type ForwardRefExoticComponent, type RefAttributes } from 'react';
import { ChatComponentName } from '../../componentNames';

export interface IBaseChatMessageAvatarProps extends AvatarProps {}

const BaseChatMessageAvatar: ForwardRefExoticComponent<IBaseChatMessageAvatarProps & RefAttributes<HTMLDivElement>> =
  forwardRef(({ style, ...rest }, ref) => (
    <Avatar
      style={{
        gridArea: 'avatar',
        marginTop: '0.625rem',
        height: '30px',
        width: '30px',
        ...(style || {}),
      }}
      ref={ref}
      {...rest}
    />
  ));

BaseChatMessageAvatar.displayName = ChatComponentName.messageAvatar;

export default BaseChatMessageAvatar;
