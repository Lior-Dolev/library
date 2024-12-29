import { FC, forwardRef, ForwardRefExoticComponent, Key, ReactEventHandler, RefAttributes, type CSSProperties, type ReactNode } from "react";
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
import { CellMeasurer, ListRowProps } from "react-virtualized";
import { virtualizedChatCache } from "./virtualizedChatCache";

interface IBaseDefaultChatMessageProps extends IChatMessageSeenByUnitsProps {
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

export interface IVirtualizedDefaultChatMessageProps extends Omit<IBaseDefaultChatMessageProps, 'onLoad' | 'style'>, Omit<ListRowProps, 'columnIndex'> {
}

const VirtualizedDefaultChatMessage: FC<IVirtualizedDefaultChatMessageProps> = ({
  avatarText,
  avatarTooltip,
  children,
  hasSeenByAll,
  index,
  isMine,
  key,
  messsageId,
  parent,
  seenByUsers,
  style,
  timestamp
}) => (
  <CellMeasurer
    cache={virtualizedChatCache}
    columnIndex={0}
    key={key}
    parent={parent}
    rowIndex={index}
  >
    {({ measure, registerChild }) => (
      <BaseDefaultChatMessage
        style={style}
        ref={registerChild}
        onLoad={measure}
        avatarText={avatarText}
        avatarTooltip={avatarTooltip}
        hasSeenByAll={hasSeenByAll}
        isMine={isMine}
        messsageId={messsageId}
        seenByUsers={seenByUsers}
        timestamp={timestamp}
      >
        {children}
      </BaseDefaultChatMessage>
    )}
  </CellMeasurer>
)

export default VirtualizedDefaultChatMessage;