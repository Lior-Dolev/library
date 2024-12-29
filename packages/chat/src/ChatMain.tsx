import { css } from "@emotion/react";
import type { FC, ReactNode } from "react";
import { AutoSizer, List, ListRowRenderer } from "react-virtualized";
import { virtualizedChatCache } from "./virtualizedChatCache";
import { ChatComponentName } from "./componentNames";

export interface IChatMainProps {
  isLoading?: boolean;
  messagesCount: number;
  rowRenderer: ListRowRenderer;
}

interface IBaseChatMainProps {
  children: ReactNode;
}

const fullHeightCss = css({
  width: '100%',
  direction: 'rtl',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  gap: '0.5rem'
})

const BaseChatMain: FC<IBaseChatMainProps> = ({
  children
}) => (
  <div css={fullHeightCss}>{children}</div>
)

BaseChatMain.displayName = ChatComponentName.main

const VirtualizedChatMain: FC<IChatMainProps> = ({ messagesCount, rowRenderer }) => (
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

export default VirtualizedChatMain;