import { forwardRef, ForwardRefExoticComponent, ReactEventHandler, RefAttributes, type CSSProperties, type ReactNode } from "react";
import ChatMessage, {
  ChatMessageAvatar,
  ChatMessageContent,
  ChatMessageDateTime,
  ChatMessageMatadata,
  ChatMessageSeenByUnits,
  type IChatMessageAvatarProps,
  type IChatMessageSeenByUnitsProps
} from "./ChatMessage";
import Typography from "@horus-library/typography";

export interface IDefaultChatMessageProps extends IChatMessageSeenByUnitsProps {
  avatarText: string;
  avatarTooltip: IChatMessageAvatarProps['tooltipContent'];
  children: ReactNode;
  isMine: boolean;
  onLoad?: ReactEventHandler<HTMLDivElement>;
  style?: CSSProperties;
  timestamp: number;
}

const DefaultChatMessage: ForwardRefExoticComponent<IDefaultChatMessageProps & RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, IDefaultChatMessageProps>(({ avatarText,
  avatarTooltip,
  children,
  hasSeenByAll,
  isMine,
  onLoad,
  seenByUsers,
  style,
  timestamp }) => {
  return (<ChatMessage direction={isMine ? 'rtl' : 'ltr'} onLoad={onLoad} style={style} >
    <ChatMessageAvatar tooltipContent={avatarTooltip} >
      <Typography>{avatarText}</Typography>
    </ChatMessageAvatar>
    <ChatMessageContent>
      {children}
    </ChatMessageContent>
    <ChatMessageMatadata>
      <ChatMessageSeenByUnits hasSeenByAll={hasSeenByAll} seenByUsers={seenByUsers} />
      <ChatMessageDateTime timestamp={timestamp} />
    </ChatMessageMatadata>
  </ChatMessage>)
})

export default DefaultChatMessage;