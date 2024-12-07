import type { ReactNode, FC } from 'react';
import { ChatComponentName } from '../componentNames';
import BaseChatMain from './BaseChatMain';
import { ChatMessageSkeleton } from '../ChatMessage';

export interface IChatMainProps {
  isLoading?: boolean;

  /** messages */
  children?: ReactNode;
}

const ChatMainContentSkeleton = () => (
  <>
    <ChatMessageSkeleton
      isMine={false}
      messsageId={'1'}
    />
    <ChatMessageSkeleton
      isMine={true}
      messsageId={'2'}
    />
    <ChatMessageSkeleton
      isMine={false}
      messsageId={'3'}
    />
  </>
);

const ChatMain: FC<IChatMainProps> = ({ children, isLoading }) => {
  return <BaseChatMain>{isLoading ? <ChatMainContentSkeleton /> : children}</BaseChatMain>;
};

ChatMain.displayName = ChatComponentName.main;

export default ChatMain;
