import type { FC } from "react";
import { CellMeasurer, ListRowProps } from "react-virtualized";
import { virtualizedChatCache } from "../virtualizedChatCache";
import BaseDefaultChatMessage, { IBaseDefaultChatMessageProps } from "./BaseDefaultChatMessage";

export interface IDefaultChatMessageProps extends
  Omit<IBaseDefaultChatMessageProps, 'onLoad' | 'style'>,
  Omit<ListRowProps, 'columnIndex'> {
}

const DefaultChatMessage: FC<IDefaultChatMessageProps> = ({
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

export default DefaultChatMessage;