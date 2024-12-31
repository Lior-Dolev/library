import type { FC } from "react";
import { AutoSizer, List, ListRowRenderer } from "react-virtualized";
import { virtualizedChatCache } from "../virtualizedChatCache";
import BaseChatMain from "./BaseChatMain";

export interface IChatMainProps {
  isLoading?: boolean;
  firstUnseenMessage?: number;
  messagesCount: number;
  rowRenderer: ListRowRenderer;
}

const ChatMain: FC<IChatMainProps> = ({ firstUnseenMessage, messagesCount, rowRenderer }) => (
  <BaseChatMain>
    <AutoSizer>
      {({ width, height }) => (
        <List
          deferredMeasurementCache={virtualizedChatCache}
          rowHeight={virtualizedChatCache.rowHeight}
          rowRenderer={rowRenderer}
          height={height}
          rowCount={messagesCount}
          scrollToIndex={firstUnseenMessage}
          width={width}
        />)}
    </AutoSizer>
  </BaseChatMain>
)

export default ChatMain;