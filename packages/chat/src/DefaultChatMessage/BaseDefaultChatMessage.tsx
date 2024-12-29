import {
  forwardRef,
  type ForwardRefExoticComponent,
  type Key,
  type ReactEventHandler,
  type RefAttributes,
  type CSSProperties,
  type ReactNode
} from "react";
import ChatMessage, {
  ChatMessageAvatar,
  ChatMessageContent,
  ChatMessageDateTime,
  ChatMessageMatadata,
  ChatMessageSeenByUnits,
  type IChatMessageAvatarProps,
  type IChatMessageSeenByUnitsProps
} from "../ChatMessage";
import Typography from "@horus-library/typography";

export interface IBaseDefaultChatMessageProps extends IChatMessageSeenByUnitsProps {
  avatarText: string;
  avatarTooltip: IChatMessageAvatarProps['tooltipContent'];
  children: ReactNode;
  isMine: boolean;
  messsageId: Key;
  onLoad?: ReactEventHandler<HTMLDivElement>;
  style?: CSSProperties;
  timestamp: number;
}

const BaseDefaultChatMessage: ForwardRefExoticComponent<IBaseDefaultChatMessageProps & RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, IBaseDefaultChatMessageProps>(({
  avatarText,
  avatarTooltip,
  children,
  hasSeenByAll,
  isMine,
  messsageId,
  onLoad,
  seenByUsers,
  style,
  timestamp }) => {
  return (<ChatMessage direction={isMine ? 'rtl' : 'ltr'} key={messsageId} onLoad={onLoad} style={style} >
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

export default BaseDefaultChatMessage;