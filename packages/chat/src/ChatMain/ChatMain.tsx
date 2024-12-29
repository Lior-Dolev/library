import type { FC } from "react";
import { AutoSizer, List, ListRowRenderer } from "react-virtualized";
import { virtualizedChatCache } from "../virtualizedChatCache";
import BaseChatMain from "./BaseChatMain";

export interface IChatMainProps {
  isLoading?: boolean;
  messagesCount: number;
  rowRenderer: ListRowRenderer;
}

const ChatMain: FC<IChatMainProps> = ({ messagesCount, rowRenderer }) => (
  <BaseChatMain>
    <AutoSizer>
      {({ width, height }) => (
        <List
          deferredMeasurementCache={virtualizedChatCache}
          rowHeight={virtualizedChatCache.rowHeight}
          rowRenderer={rowRenderer}
          height={height}
          rowCount={messagesCount}
          width={width}
        />)}
    </AutoSizer>
  </BaseChatMain>
)

export default ChatMain;