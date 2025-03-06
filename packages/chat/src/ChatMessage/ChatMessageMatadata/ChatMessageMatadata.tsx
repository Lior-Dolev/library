import type { FC, ReactNode } from 'react';
import { css } from '@emotion/react';
import { ChatComponentName } from '../../componentNames';

export interface IChatMessageMatadataProps {
  children: ReactNode;
}

const chatMessageMatadataCSS = css({
  gridArea: 'metadata',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5em',
});

const ChatMessageMatadata: FC<IChatMessageMatadataProps> = ({ children }) => {
  return <div css={chatMessageMatadataCSS}>{children}</div>;
};

ChatMessageMatadata.displayName = ChatComponentName.messageMetadata;

export default ChatMessageMatadata;
