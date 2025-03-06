import type { Meta } from '@storybook/react';
import { Chat } from '@horus-library/chat';
import { ChatDefault } from './Chat.stories';
import ResizableDiv from './ResizableDiv';

const meta = {
  title: 'Components/Chat/ResizableChat',
  component: Chat,
  tags: ['autodocs'],
} as Meta<typeof Chat>;

export default meta;

export const Default = () => {
  return (
    <>
      {/* <button onClick={handleOpen}>Open Chat</button> */}
      <ResizableDiv>
        {/* <div>
          <ChatDefault />
        </div> */}
      </ResizableDiv>
    </>
  );
};
