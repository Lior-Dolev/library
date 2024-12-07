import {
  forwardRef,
  type ForwardRefExoticComponent,
  type Key,
  type RefAttributes,
  type CSSProperties,
  type ReactNode,
} from 'react';
import ChatMessage from './ChatMessage';
import ChatMessageMatadata, {
  ChatMessageDateTime,
  ChatMessageSeenByUnits,
  IChatMessageSeenByUnitsProps,
} from './ChatMessageMatadata';
import { ChatMessageAvatarByType, IChatMessageAvatarByTypeProps, IChatMessageAvatarProps } from './ChatMessageAvatar';
import ChatMessageContent from './ChatMessageContent';

export interface IDefaultChatMessageProps extends IChatMessageSeenByUnitsProps {
  avatarText: string;
  avatarTooltip: IChatMessageAvatarProps['tooltipContent'];
  avatarType?: IChatMessageAvatarByTypeProps['type'];
  children: ReactNode;
  isMine: boolean;
  messsageId: Key;
  style?: CSSProperties;
  timestamp: number;
}

const DefaultChatMessage: ForwardRefExoticComponent<IDefaultChatMessageProps & RefAttributes<HTMLDivElement>> =
  forwardRef<HTMLDivElement, IDefaultChatMessageProps>(
    (
      {
        avatarText,
        avatarTooltip,
        avatarType,
        children,
        hasSeenByAll,
        isMine,
        messsageId,
        seenByUsers,
        style,
        timestamp,
      },
      ref,
    ) => (
      <ChatMessage
        direction={isMine ? 'rtl' : 'ltr'}
        key={messsageId}
        ref={ref}
        style={style}
      >
        <ChatMessageAvatarByType
          tooltipContent={avatarTooltip}
          type={avatarType}
        >
          {avatarText}
        </ChatMessageAvatarByType>
        <ChatMessageContent>{children}</ChatMessageContent>
        <ChatMessageMatadata>
          <ChatMessageSeenByUnits
            hasSeenByAll={hasSeenByAll}
            seenByUsers={seenByUsers}
          />
          <ChatMessageDateTime timestamp={timestamp} />
        </ChatMessageMatadata>
      </ChatMessage>
    ),
  );

export default DefaultChatMessage;
