import type { Meta } from '@storybook/react';
import { ChatModal } from '@horus-library/chat';
import { ChatDefault } from './Chat.stories';
import { useState } from 'react';

const meta = {
  title: 'Components/Chat/ChatModal',
  component: ChatModal,
  tags: ['autodocs'],
} as Meta<typeof ChatModal>;

export default meta;

export const Default = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <button onClick={handleOpen}>Open Chat</button>
      <ChatModal
        chatHeaderId={'chat-header'}
        isOpen={open}
        onClose={onClose}
      >
        <div style={{ width: '400px' }}>
          <ChatDefault />
        </div>
      </ChatModal>
    </>
  );
};
